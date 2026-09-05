import logger from '../logger.js'

export default {
    name: 'set-port',
    description: 'Set the port for bots',
    execute(args, context) {
        const port = args[0];

        if (!port) {
            logger.log('Usage: set-port <port>');
            return;
        }

        context.state.port = port;
    }
}