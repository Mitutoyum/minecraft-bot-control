import logger from '../logger.js'

export default {
    name: 'chat',
    description: 'Make bot send message',
    execute(args, context) {
        const [name, ...message_args] = args;
        const message = message_args.join(' ');

        if (!name || !message) {
            logger.log('Usage: chat <bot> <message>');
            return;
        }

        const bot = context.state.bots[name];

        if (!bot) {
            logger.log(`No bot found with the given name: ${name}`);
            return;
        }

        try {
            bot.chat(message);
        } catch (err) {
            logger.log(`⚠️  ${name} failed to send chat: ${err.message}`);
        }
    }
}