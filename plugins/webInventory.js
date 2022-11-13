import inventoryViewer from 'mineflayer-web-inventory'

let server, player, bot, setPlayerControl

let webInventoryStarted = false

function init(A, B, C, D) {
  server = A
  player = B
  bot = C
  setPlayerControl = D
}

const commands = [
  {
    name: 'webInventory',
    helpMessage: 'Start web inventory',
    exec: () => {
      if (webInventoryStarted === false) {
          inventoryViewer(bot)
          webInventoryStarted = true
          player.write('chat', { message: `{"text":"§4Proxy -> §fStarted web inventory"}`, position: 1, sender: '00000000-0000-0000-0000-000000000000' })
      } else {
        player.write('chat', { message: `{"text":"§4Proxy -> §fWeb inventory already started"}`, position: 1, sender: '00000000-0000-0000-0000-000000000000' })
      }
    }
  },
  {
    name: 'stopWebInventory',
    helpMessage: 'Stop web inventory',
    exec: () => {
      if (webInventoryStarted === true) {
        bot.webInventory.stop()
        webInventoryStarted = false
        player.write('chat', { message: `{"text":"§4Proxy -> §fStopped web inventory"}`, position: 1, sender: '00000000-0000-0000-0000-000000000000' })
      } else {
        player.write('chat', { message: `{"text":"§4Proxy -> §fWeb inventory not running"}`, position: 1, sender: '00000000-0000-0000-0000-000000000000' })
      }
    }
  }
]

export default { commands, init }
