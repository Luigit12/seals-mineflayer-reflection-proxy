
let server, player, bot, setPlayerControl
function init(A, B, C, D) {
  server = A
  player = B
  bot = C
  setPlayerControl = D
}

const commands = [
  {
    name: 'disconnect',
    helpMessage: 'disconnect proxy with /disconnect',
    exec: () => {
        console.log(`${bot.username} disconnected in game`)
        player.end()
        bot.quit()
    }
  }
]

export default { commands, init }
