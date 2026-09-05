import logger from '../logger.js'

export default {
    name: 'clear-name',
    description: 'Clear names',
    execute(args, context) {
        context.state.default_names = []
    }
}