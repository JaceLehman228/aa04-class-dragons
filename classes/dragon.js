// Your code here 
class Dragon {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  breathesFire() {
    return `${this.name} breathes fire everywhere! BURN!!!!`;
  }

  static getDragons(...dragons) {
    let nameArr = []
    for(let i = 0; i < dragons.length; i++) {
      nameArr.push(dragons[i].name);
    }
    return nameArr;
  }
}

// const puff = new Dragon("Puff", "green");
// console.log(puff);
// console.log(puff.breathesFire());
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
