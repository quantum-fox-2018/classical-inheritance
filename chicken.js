const {Animal} = require("./animals_inheritance.js");

class Chicken extends Animal {
  constructor(obj) {
    super(obj);
  }
}

let chicken = new Chicken({name: "Chicken 1", num_legs: 2, is_warm_blooded: true});
console.log(chicken);
