import logger from '../logger.js'
 
export default {
    name: 'set-autorejoin',
    description: 'Set auto rejoin for bots',
    execute(args, context) {
        const value = (args[0] || '').toLowerCase();
 
        if (value === 'on') {
            context.state.auto_rejoin = true;
        } else if (value === 'off') {
            context.state.auto_rejoin = false;
        } else if (value === 'toggle' || value === '') {
            context.state.auto_rejoin = !context.state.auto_rejoin;
        } else {
            logger.log('Usage: auto-rejoin on|off|toggle');
            return;
        }
    }
}
