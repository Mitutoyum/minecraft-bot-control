import logger from '../logger.js'

export default {
    name: 'set-host',
    description: 'Set the host for bots',
    execute(args, context) {
        const host = args[0];

        if (!host) {
            logger.log('Usage: set-host <host>');
            return;
        }

        context.state.host = host;
    }
}