import mineflayer from 'mineflayer'
import logger from './logger.js'
import names from './names.json' with { type: 'json' }

export function spawnBot(options) {
    const bot = mineflayer.createBot(options)
    const username = options.username

    bot.once('spawn', () => {
        logger.log(`✅ ${username} spawned`)
    })


    let was_kicked = false

    bot.on('kicked', (reason) => {
        was_kicked = true

        const type = reason.type

        if (type === 'string') {
            logger.log(`⚠️  ${username} kicked: ${reason.value}`)
        } else if (type === 'compound') {
            if (reason.value.translate.value == 'multiplayer.disconnect.banned') {
                logger.log(`⚠️  ${username} banned`)
            } else {
                logger.log(`⚠️  ${username} kicked`)
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

        logger.log(`⚠️  ${username} error:`, err.message)
    })
    
    return bot
}

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}


const WORDS = [
  'Tiger', 'Moon', 'Dragon', 'Shadow', 'Storm', 'Wolf', 'Star', 'Phoenix',
  'Falcon', 'Blaze', 'Frost', 'Raven', 'Comet', 'Ghost', 'Viper', 'Thunder',
  'Eagle', 'Shark', 'Panther', 'Cobra', 'Flame', 'Nova', 'Hawk', 'Rider',
  'Hunter', 'Reaper', 'Knight', 'Wizard', 'Ninja', 'Fox', 'Bear', 'Lion',
  'Wraith', 'Spirit', 'Blade', 'Arrow', 'Sky', 'Sun', 'Ice', 'Fire',
  'Wind', 'Rain', 'Titan', 'Rocket', 'Rebel', 'Ranger', 'Scout',
  'Legend', 'Myth', 'Echo', 'Pulse', 'Vortex', 'Zenith', 'Nomad', 'Drift'
]

export function randomName() {
  const firstName = names[randomInt(0, names.length - 1)]
  const word = WORDS[randomInt(0, WORDS.length - 1)]
  const number = randomInt(1, 9999)

  return `${firstName}${word}${number}`
}