import logger from '../logger.js'

export default {
    name: 'set-cooldown',
    description: 'Set the delay (ms) between each bot joining',
    execute(args, context) {
        const value = args[0];
 
        if (!value) {
            logger.log('Usage: set-cooldown <ms>');
            return;
        }
 
        const ms = parseInt(value, 10);
 
        if (isNaN(ms) || ms < 0) {
            logger.log('Cooldown must be a positive number of milliseconds');
            return;
        }
 
        context.state.spawn_cooldown_ms = ms;
    }
}