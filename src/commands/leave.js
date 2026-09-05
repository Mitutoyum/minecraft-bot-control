import logger from '../logger.js'

export default {
    name: 'leave',
    description: 'Disconnect bot with the given name',
    execute(args, context) {
        const name = args[0];

        if (!name) {
            console.log('Usage: leave <name>');
            return;
        }

        const bot = context.state.bots[name];

        if (!bot) {
            logger.log(`No bot found with the given name: ${name}`);
            return;
        }

        bot.quit();
        delete context.state.bots[name];
    }
}