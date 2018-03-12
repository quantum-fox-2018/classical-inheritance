const {Animal} = require("./animals_inheritance.js");

class Bat extends Animal {
  constructor(obj) {
    super(obj);
  }
}

let bat = new Bat({name: "Bat 1", num_legs: 2, is_warm_blooded: true});
console.log(bat);
