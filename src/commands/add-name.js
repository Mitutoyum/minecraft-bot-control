import logger from '../logger.js'

export default {
    name: 'add-name',
    description: 'Add name',
    execute(args, context) {
        const name = args[0];

        if (!name) {
            logger.log('Usage: add-name <name>');
            return;
        }

        const default_names = context.state.default_names

        if (default_names.includes(name)) {
            logger.log(`${name} already exists`);
            return;
        }

        default_names.push(name);
    }

}