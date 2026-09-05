import logger from '../logger.js'

export default {
    name: 'chat',
    description: 'Make bot send message',
    execute(args, context) {
        const [bot_name, ...message_args] = args;
        const message = message_args.join(' ');

        if (!bot_name || !message) {
            logger.log('Usage: chat <bot> <message>');
            return;
        }

        const bot = context.state.bots[bot_name];

        if (!bot) {
            logger.log(`No bot found with the given name: ${bot_name}`);
            return;
        }

        bot.chat(message);
    }
}