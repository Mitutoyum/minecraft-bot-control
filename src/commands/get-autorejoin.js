import logger from '../logger.js'
 
export default {
    name: 'get-autorejoin',
    description: 'Show whether auto-rejoin is currently on or off',
    execute(args, context) {
        logger.log(context.state.auto_rejoin ? 'ON' : 'OFF');
    }
}
