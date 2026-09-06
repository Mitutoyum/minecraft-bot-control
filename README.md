# Minecraft Bot Control

Minecraft tool for controlling bots

## Installation
 
Install [NodeJS](https://nodejs.org) and run these commands in a terminal

```bash
git clone https://github.com/Mitutoyum/minecraft-bot-control.git
cd minecraft-bot-control
npm install
```
 
## Usage
 
```bash
npm start
```

## Commands
 
| Command | Description |
|---|---|
| `set-host <host>` | Set the server host/IP |
| `get-host` | Show the currently set host |
| `set-port <port>` | Set the server port |
| `get-port` | Show the currently set port |
| `set-version <version\|auto>` | Set the exact Minecraft version to connect with |
| `get-version` | Show the currently set version |
| `spawn <amount>` | Spawn `<amount>` bots with random names |
| `spawn` | Spawn bots using your saved name list (see `add-name`) |
| `add-name <name>` | Add one or more names to the spawn name list |
| `remove-name <name>` | Remove a name from the spawn name list |
| `clear-name` | Clear the entire spawn name list |
| `list-name` | Show the current spawn name list |
| `chat <bot> <message>` | Send a chat message from a specific bot |
| `chat-all <message>` | Send a chat message from every connected bot |
| `leave <bot>` | Disconnect a specific bot |
| `leave-all` | Disconnect every connected bot |
| `set-cooldown <ms>` | Set the delay between each bot joining/rejoining |
| `get-cooldown` | Show the current join cooldown |
| `set-autorejoin on\|off` | Enable/disable automatic rejoining on disconnect |
| `get-autorejoin` | Show whether auto-rejoin is currently on |
| `help` | List available commands |
| `exit` | Disconnect all bots and exit |
 
> **Tip:** Using `auto` for the version makes an extra "status ping" connection per bot before logging in, which doubles your connection load and can trigger server-side throttling. Setting an explicit version (e.g. `1.21.11`) avoids this.