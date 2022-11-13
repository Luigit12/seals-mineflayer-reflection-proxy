import antiafk from "mineflayer-antiafk"

let player, bot, setPlayerControl

function init(_,p,b,c) {
  b.loadPlugin(antiafk)
  player = p
  bot = b
  setPlayerControl = c
}

const commands = [
  {
    name: 'fish',
    helpMessage: 'Auto fish, /fish',
    exec: () => {
      setPlayerControl(false)
      //bot.afk.setOptions({ fishing: true })
      bot.afk.start()
      player.write('chat', { message: `{"text":"§4Proxy -> §fStarted Fishing"}`, position: 1, sender: '00000000-0000-0000-0000-000000000000' })
    }
  }, 
  {
    name: 'fishstop',
    helpMessage: 'Stop Auto fishing, /fishstop',
    exec: () => {
      bot.afk.stop()
      player.write('chat', { message: `{"text":"§4Proxy -> §fStopped Fishing"}`, position: 1, sender: '00000000-0000-0000-0000-000000000000' })
      setPlayerControl(true)
    }
  } 
]

export default { commands, init }
