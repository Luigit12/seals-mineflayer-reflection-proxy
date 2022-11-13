import radarPlugin from 'mineflayer-radar'

let server, player, bot, setPlayerControl
let radarStarted = false

var options = {
    host: '0.0.0.0', // optional
    port: 3000,         // optional
  }

function init(A, B, C, D) {
  server = A
  player = B
  bot = C
  setPlayerControl = D
}

const commands = [
  {
    name: 'radar',
    helpMessage: 'Start radar',
    exec: () => {
      if (radarStarted === false) {
        radarPlugin(bot)
        radarStarted = true
        player.write('chat', { message: `{"text":"§4Proxy -> §fStarted radar"}`, position: 1, sender: '00000000-0000-0000-0000-000000000000' })
      } else {
        player.write('chat', { message: `{"text":"§4Proxy -> §fRadar already started"}`, position: 1, sender: '00000000-0000-0000-0000-000000000000' })
      }
    }
  },
  {
    name: 'stopRadar',
    helpMessage: 'Stop radar',
    exec: () => {
      if (radarStarted === true) {
        bot.radarPlugin.stop()
        radarStarted = false
        player.write('chat', { message: `{"text":"§4Proxy -> §fStopped radar"}`, position: 1, sender: '00000000-0000-0000-0000-000000000000' })
      } else {
        player.write('chat', { message: `{"text":"§4Proxy -> §fRadar not running"}`, position: 1, sender: '00000000-0000-0000-0000-000000000000' })
      }
    }
  }
]

export default { commands, init }
