import logger from '../logger.js'
import mineflayer from 'mineflayer'

export default {
    name: 'set-version',
    description: 'Set the minecraft version for bots',
    execute(args, context) {
        const version = args[0];

        if (!version) {
            logger.log('Usage: set-version <version|auto>');
            return;
        }

        if (version !== 'auto' && !mineflayer.testedVersions.includes(version)) {
            logger.log(`Invalid version: ${version}\nSupported versions: ${mineflayer.testedVersions.join(', ')}`);
            return;
        }

        context.state.version = version;
    }
}