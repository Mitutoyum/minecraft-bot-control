import mineflayer from 'mineflayer'
import logger from './logger.js'

export function spawnBot(options) {
    const bot = mineflayer.createBot(options)
    const username = options.username

    bot.on('spawn', () => {
        logger.log(`✅ ${username} spawned`)
    })


    let was_kicked = false

    bot.on('kicked', (reason) => {
        was_kicked = true

        const type = reason.type

        if (type === 'string') {
            logger.log(`⚠️ ${username} kicked: ${reason.value}`)
        } else if (type === 'compound') {
            if (reason.value.translate.value == 'multiplayer.disconnect.banned') {
                logger.log(`⚠️ ${username} banned`)
            } else {
                logger.log(`⚠️ ${username} kicked`)
            }
        }
    })

    bot.on('end', (reason) => {
        if (was_kicked) 
            return
    
        logger.log(`❌ ${username} disconnected`)
    })

    bot.on('error', (err) => {
        if (was_kicked)
            return

        logger.log(`⚠️ ${username} error:`, err.message)
    })
    
    return bot
}

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function randomName() {
  const length = randomInt(6, 12)
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let name = letters[randomInt(0, letters.length - 1)]
  for (let i = 1; i < length; i++) {
    name += chars[randomInt(0, chars.length - 1)]
  }
  return name
}