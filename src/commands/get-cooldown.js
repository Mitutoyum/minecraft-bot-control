import logger from '../logger.js'

export default {
    name: 'get-cooldown',
    description: 'Get cooldown',
    execute(args, context) {
        logger.log(context.state.spawn_cooldown_ms);
    }
}