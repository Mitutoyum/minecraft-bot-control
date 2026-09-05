import logger from '../logger.js'

export default {
    name: 'remove-name',
    description: 'Remove name',
    execute(args, context) {
        const name = args[0];

        if (!name) {
            logger.log('Usage: remove-name <name>');
            return;
        }

        if (!context.state.default_names.includes(name)) {
            logger.log(`${name} doesnt exist`);
            return;
        }

        context.state.default_names = context.state.default_names.filter(n => n !== name)
    }
}