const {Animal} = require("./animals_inheritance.js");

class Chimpanzee extends Animal {
  constructor(obj) {
    super(obj);
  }
}

let chimpanzee = new Chimpanzee({name: "Chimpanzee 1", num_legs: 4, is_warm_blooded: true});
console.log(chimpanzee);
