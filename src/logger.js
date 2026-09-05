import readline from 'readline'

class Logger {
    #rl = null
    #atPrompt = true

    init = (readlineInterface) => {
        this.#rl = readlineInterface
    }

    setAtPrompt = (value) => {
        this.#atPrompt = value
    }

    log = (...args) => {
        if (this.#atPrompt && this.#rl) {
            readline.clearLine(process.stdout, 0)
            readline.cursorTo(process.stdout, 0)
            console.log(...args)
            this.#rl.prompt(true)
        } else {
            console.log(...args)
        }
    }
}


export default new Logger()