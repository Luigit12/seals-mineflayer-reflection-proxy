/*
module.exports = [
  //require('./walkTo.js'),
  //require('./followPlayer.js'),
  // require('./fish.js'),
  require('./mark.js'),
  // require('./wordChallenge.js')
]
*/
import mark from './mark.js'
import walkTo from './walkTo.js'
import wordChallenge from './wordChallenge.js'
import followPlayer from './followPlayer.js'
import fish from './fish.js'
import webInventory from './webInventory.js'
import radar from './radar.js'
import disconnect from './disconnect.js'

export default [mark,walkTo,wordChallenge,followPlayer,fish,webInventory,radar,disconnect]