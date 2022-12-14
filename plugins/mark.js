import Vec3 from 'vec3'

let server, player, bot, setPlayerControl, mcData
function init(A, B, C, D) {
  server = A
  player = B
  bot = C
  setPlayerControl = D
}

const commands = [
  {
    name: 'mark',
    helpMessage: 'Put a beacon light at location, /mark',
    exec: () => {
      const { x, y, z } = bot.entity.position
      // console.log(bot.blockAt(Vec3(-184, 67, 113)))
      // console.log(bot.blockAt(Vec3(-184, 65, 113)))
      player.write('block_change', { location: { x: Math.floor(x), z: Math.floor(z), y: Math.floor(y) - 1 }, type: 138 })
      player.write('chat', { message: `{"text":"§4Proxy -> §fMarked ${Math.floor(x)},${Math.floor(z)}"}`, position: 1, sender: '00000000-0000-0000-0000-000000000000' })
    }
  }
]


export default { commands, init }
