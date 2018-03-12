"use strict"

class  Animal {
  constructor() {
    this.num_legs = 2;
    this.is_warm_blooded = true;
    this.superpower = new SuperPower();
  }
}

class SuperPower {
  constructor() {

  }

  use_laser_visions() {
    console.log('Use Laser Visions: it is very effective!');
  }

  be_invisible() {
    console.log('Invisible ability activated!');
  }
}

class Fox extends Animal {
  constructor(num_legs) {
    super();
    this.num_legs = num_legs;
  }
}

class Bird extends Animal {
  constructor(is_warm_blooded) {
    super();
    this.is_warm_blooded = is_warm_blooded;
  }
}

class Spider extends Animal {
  constructor(num_legs) {
    super();
    this.num_legs = num_legs;
  }
}

let fox = new Fox(4);
let bird = new Bird(false);
let spider = new Spider(8);

console.log(fox);
fox.superpower.use_laser_visions();
//console.log(bird);
console.log();
console.log(spider);
spider.superpower.be_invisible();
