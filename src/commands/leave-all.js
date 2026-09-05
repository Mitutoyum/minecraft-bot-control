export default {
    name: 'leave-all',
    description: 'Disconnect all bots',
    execute(args, context) {
        for (const [name, bot] of Object.entries(context.state.bots)) {
            bot.quit();
            delete context.state.bots[name];
        }
    }
}