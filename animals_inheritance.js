"use strict"

class Animal {
  constructor(name, num_legs, invisible, laser) {
    this.name = name;
    this.num_legs = num_legs;
    this.superpower = new SuperPower(invisible);
  }
}

class Rabbit extends Animal {
  constructor(name, num_legs, invisible, laser) {
    super(name, num_legs, invisible, laser);
  }
}

class Chimpanzee extends Animal {
  constructor(name, num_legs, invisible) {
    super(name, num_legs, invisible);
  }
}

class SuperPower {
  constructor(invisible, laser) {
    this.invisible = this.be_invisible(invisible)
    this.laser = this.use_laser_vision(laser)
  }

  be_invisible(invisible) {
    return invisible
  }

  use_laser_vision(laser) {
    return laser;
  }
}

let rabbit = new Animal('white rabbit', 4, true, false)
// console.log(rabbit.name)
// console.log(rabbit.speed)
console.log(rabbit)
