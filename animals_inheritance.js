/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/

"use strict";


class Animal {

  constructor(num_legs, is_warm_blooded, laserVision, invisible) {
    this.num_legs = num_legs;
    this.is_warm_blooded = is_warm_blooded;
    this.superPower = new SuperPower(laserVision, invisible);
  }
}

class Frog extends Animal {
  constructor(num_legs, is_warm_blooded, laserVision, invisible) {
    super(num_legs, is_warm_blooded, laserVision, invisible);
//     this.superPower = new SuperPower();
  }
}

class Bat extends Animal {
  constructor(num_legs, is_warm_blooded, laserVision, invisible) {
    super(num_legs, is_warm_blooded, laserVision, invisible);
//     this.superPower = new SuperPower();
  }
}

class Chimpanzee extends Animal {
  constructor(num_legs, is_warm_blooded, laserVision, invisible) {
    super(num_legs, is_warm_blooded, laserVision, invisible);
//     this.superPower = new SuperPower();
  }
}


class Fox extends Animal {
  constructor(num_legs, is_warm_blooded, laserVision, invisible) {
    super(num_legs, is_warm_blooded, laserVision, invisible);
//     this.superPower = new SuperPower();
  }
}


class Chicken extends Animal {
  constructor(num_legs, is_warm_blooded,laserVision, invisible) {
    super(num_legs, is_warm_blooded, laserVision, invisible);
//     this.superPower = new SuperPower();
  }
}

class SuperPower {
  constructor(laserVision, invisible) {
  this.laserVision = this.use_laser_vision(laserVision);
  this.invisible = this.be_invisible(invisible);

  }
  use_laser_vision(laserVision) {
  return laserVision;
  }
  be_invisible(invisible) {
  return invisible;
  }
}

// let binatang = new Animal(2, true);
// console.log(binatang);
let frog = new Frog(2, 'dingin', true, false);
console.log(frog);
let ayam = new Chicken(2, 'panas', true, false);
console.log(ayam);
let Chimpanze = new Chimpanzee (4, 'panas', false, false);
console.log(Chimpanze);
