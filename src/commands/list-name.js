import logger from '../logger.js'

export default {
    name: 'list-name',
    description: 'List name',
    execute(args, context) {
        const default_names = context.state.default_names;
 
        if (default_names.length === 0) {
            logger.log('No default names set, spawn will use random names');
            return;
        }
 
        logger.log(default_names.join(', '));
    }
}