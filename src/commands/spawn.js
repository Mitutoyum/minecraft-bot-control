import { spawnBot, sleep, randomName } from '../utils.js'
import logger from '../logger.js'

function registerBot(state, username) {
    const version = state.version === 'auto' ? null : state.version

    const bot = spawnBot({
        host: state.host,
        port: state.port,
        version: version,
        username: username,
        hideErrors: true,
    });

    state.bots[username] = bot;

    let was_banned = false;

    bot._client.on('packet', (data, meta) => {
        if (meta.name === 'show_dialog') {
            console.dir(data, {depth: null});
        }
    })

    bot.on('kicked', (reason) => {
        if (reason.type == 'compound' && reason.value.translate.value == 'multiplayer.disconnect.banned') {
            was_banned = true;
        }
    })
 
    bot.on('end', () => {
        delete state.bots[username];
 
        if (state.auto_rejoin && !was_banned) {
            setTimeout(() => registerBot(state, username), state.spawn_cooldown_ms);
        }
    });
 
    return bot;
}

export default {
    name: 'spawn',
    description: 'Spawn bots',
    async execute(args, context) {
        const state = context.state;

        if (!state.host) {
            logger.log('Please set a host first');
            return;
        }

        if (!state.port) {
            logger.log('Please set a port first');
            return;
        }

        if (!state.version) {
            logger.log('Please set a version first');
            return;
        }

        const amount = args[0];

        if (amount) {
            for (let i = 0; i < amount; i++) {
                let name = randomName();

                do {
                    name = randomName();
                } while (state.bots[name]);

                registerBot(state, name);

                await sleep(state.spawn_cooldown_ms);
            }
        } else if (state.default_names.length > 0) {
            for (const name of state.default_names) {
                if (state.bots[name])
                    continue;

                registerBot(state, name);

                await sleep(state.spawn_cooldown_ms);
            }
        } else {
            logger.log('Usage: spawn <amount>');
        }
    }
}