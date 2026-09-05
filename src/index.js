import readline from 'readline'
import state from './state.js'
import logger from './logger.js'
import commands from './commands/index.js'

async function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: '> ',
    })

    logger.init(rl)
    logger.log('Welcome! Type "help" for commands.')

    rl.prompt()

    rl.on('line', async (line) => {
        logger.setAtPrompt(false);

        const [command_name, ...args] = line.trim().split(/\s+/);

        if (command_name === '') {
            logger.setAtPrompt(true);
            rl.prompt();
            return;
        }

        const command = commands[command_name];

        if (!command) {
            logger.log(`Unknown command: ${command_name}`);
            rl.prompt();
            return
        }

        try {
            await command.execute(args, { rl, commands, state});
        } catch (err) {
            logger.log(`Error running "${command_name}":`, err.message);
        }

        logger.setAtPrompt(true);
        rl.prompt()
    });

    rl.on('close', () => {
        process.exit(0);
    });
}

main().catch(err => {
    console.error(err);
    process.exit(1);
});