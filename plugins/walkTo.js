import { pathfinder, Movements } from 'mineflayer-pathfinder'
import goals from 'mineflayer-pathfinder'
import mcData from 'minecraft-data'
const { GoalXZ } = goals.goals

let server, player, bot, setPlayerControl//, mcData
function init(A, B, C, D) {
  server = A
  player = B
  bot = C
  setPlayerControl = D
  bot.loadPlugin(pathfinder)
}

const commands = [
  {
    name: 'walkTo',
    helpMessage: 'Walk To location, /walkTo <X> <Z>',
    exec: (args) => {
      if (args.length < 2) return player.write('chat', { message: `{"text":"§4Proxy -> §fError: No location specified"}`, position: 1, sender: '00000000-0000-0000-0000-000000000000' })
      setPlayerControl(false)
      const defaultMove = new Movements(bot, mcData(bot.version))
      defaultMove.allowParkour = true
      defaultMove.allowSprinting = false
      defaultMove.allowFreeMotion = false
      defaultMove.allowEntityDetection = false
      bot.pathfinder.setMovements(defaultMove)
      bot.pathfinder.setGoal(new GoalXZ(args[0], args[1]))
      player.write('chat', { message: `{"text":"§4Proxy -> §fHeading to ${args[0]},${args[1]}"}`, position: 1, sender: '00000000-0000-0000-0000-000000000000' })
      bot.once('goal_reached', () => {
        player.write('chat', { message: `{"text":"§4Proxy -> §fArrvied At ${args[0]},${args[1]}"}`, position: 1, sender: '00000000-0000-0000-0000-000000000000' })
        setPlayerControl(true)
      }) 
    }
  } 
]

export default { commands, init }