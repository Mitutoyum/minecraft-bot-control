import logger from '../logger.js'

export default {
    name: 'get-host',
    description: 'Get the current host',
    execute(args, context) {
        logger.log(context.state.host);
    }
}