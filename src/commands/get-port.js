import logger from '../logger.js'

export default {
    name: 'get-port',
    description: 'Get the current port',
    execute(args, context) {
        logger.log(context.state.port);
    }
}