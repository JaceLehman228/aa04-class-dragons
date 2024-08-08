// Your code here 
const evilDragon = require('../aa04-class-dragons/classes/evil-dragon');
const friendlyDragon = require('../aa04-class-dragons/classes/friendly-dragon');
const Dragon = require('./classes/dragon');

let falkor = new friendlyDragon('Falkor', 'white', ["save Atreyu from the swamp", "save Atreyu from the Nothing", "scare the local bullies into a dumpster"], 'Bastian');
let smaug = new evilDragon('Smaug', 'black', ["take over your mountain kingdom", "steal all your dwarven gold", "burn down your floating village"], 'Dwarf King');

let allDragons = Dragon.getDragons(falkor, smaug);
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports.falkor = falkor
  module.exports.smaug = smaug
  module.exports.allDragons = allDragons
} catch {
  module.exports = null;
}
