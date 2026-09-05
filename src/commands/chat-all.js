import logger from '../logger.js'

export default {
    name: 'chat-all',
    description: 'Make all bots send message',
    execute(args, context) {
        const message = args.join(' ');

        if (!message) {
            logger.log('Usage: chat-all <message>');
            return;
        }

        for (const [name, bot] of Object.entries(context.state.bots)) {
            bot.chat(message);
        }
    }
}