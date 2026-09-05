export default {
    name: 'exit',
    aliases: ['quit'],
    description: 'Exit the program',
    execute(args, context) {
        context.rl.close();
    }
}