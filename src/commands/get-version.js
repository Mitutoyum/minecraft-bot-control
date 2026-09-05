import logger from '../logger.js'

export default {
    name: 'get-version',
    description: 'Get the current minecraft version',
    execute(args, context) {
        logger.log(context.state.version);
    }
}