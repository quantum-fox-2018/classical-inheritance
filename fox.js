const {Animal} = require("./animals_inheritance.js");

class Fox extends Animal {
  constructor(obj) {
    super(obj);
  }
}

let fox = new Fox({name: "Fox 1", num_legs: 4, is_warm_blooded: true});
console.log(fox);
