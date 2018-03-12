const {Animal} = require("./animals_inheritance.js");

class Frog extends Animal {
  constructor(obj) {
    super(obj);
  }
}

let frog = new Frog({name: "Frog 1", num_legs: 4, is_warm_blooded: true, superpower: "loncat"});
console.log(frog.superpower.custom_power());
