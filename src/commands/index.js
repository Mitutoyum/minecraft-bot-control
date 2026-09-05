import spawn from './spawn.js'
import set_host from './set-host.js'
import set_port from './set-port.js'
import set_version from './set-version.js'
import set_cooldown from './set-cooldown.js'
import set_autorejoin from './set-autorejoin.js'
import get_host from './get-host.js'
import get_port from './get-port.js'
import get_version from './get-version.js'
import get_cooldown from './get-cooldown.js'
import get_autorejoin from './get-autorejoin.js'
import add_name from './add-name.js'
import remove_name from './remove-name.js'
import clear_name from './clear-name.js'
import list_name from './list-name.js'
import chat from './chat.js'
import chat_all from './chat-all.js'
import leave from './leave.js'
import leave_all from './leave-all.js'
import help from './help.js'
import exit from './exit.js'

const commands = {};
const command_list = [
    spawn,
    set_host,
    set_port,
    set_version,
    set_cooldown,
    set_autorejoin,
    get_host,
    get_port,
    get_version,
    get_cooldown,
    get_autorejoin,
    add_name,
    remove_name,
    clear_name,
    list_name,
    chat,
    chat_all,
    leave,
    leave_all,
    help,
    exit,
];

for (const command of command_list) {
    commands[command.name] = command;

    if (command.aliases) {
        for (const alias of command.aliases) {
            commands[alias] = command;
        }
    }
}

export default commands