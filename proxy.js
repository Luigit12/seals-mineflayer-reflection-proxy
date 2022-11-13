import dotenv from 'dotenv'
import mc from 'minecraft-protocol'
dotenv.config()

import { Connection } from './src/worldManager.js'

let host = "constantiam.net"
let port = 25565
let version = '1.12.2'

// Server user connects to
const playerServer = mc.createServer({
  'online-mode': true,
  port: 25565,
  version,
  maxPlayers: 1,
  motd: "§4Proxy -> §fSeal's super proxy!!!"
})

console.log(`Proxy running at 0.0.0.0:${port} ${version}`)

let playerConnection

playerServer.on('login', async (playerClient) => {
  console.log(`${playerClient.username} connected to the proxy`)

  if (!playerConnection) {
    playerConnection = new Connection(host, port)
    await playerConnection.created
    console.log("Created connection")
  }
  playerConnection.connectClient(playerClient)

  playerClient.once('end', () => {
    console.log(`${playerClient.username} disconnected in game`)
    playerConnection.closePlayerConnection()
    playerConnection = null
  })
})
