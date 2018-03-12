"use strict"

class Animal {
  // constructor(num_legs , blood_type, kekuatansuper) {
  //   this.num_legs = num_legs
  //   this.blood_type = blood_type
  //   this.superpower = new SuperPower(kekuatansuper);
  // }
  constructor(num_legs , blood_type) {
    this.num_legs = num_legs
    this.blood_type = blood_type
    this.superpower = new SuperPower();
  }
}

class Frog extends Animal {
  // constructor(num_legs , blood_type, kekuatansuper) {
  //   super(num_legs , blood_type, kekuatansuper)
  constructor(num_legs , blood_type) {
    super(num_legs , blood_type)
  }
}

class Fox extends Animal {
  constructor(num_legs , blood_type) {
    super(num_legs , blood_type)
  }
}
class Bat extends Animal {
  constructor(num_legs , blood_type) {
    super(num_legs , blood_type)
  }
}
class Chimpanzee extends Animal {
  constructor(num_legs , blood_type) {
    super(num_legs , blood_type)
  }
}
class Chicken extends Animal {
  constructor(num_legs , blood_type) {
    super(num_legs , blood_type)
  }
}

class SuperPower {
  // constructor(kekuatansuper) {
  //   this.superpower = kekuatansuper
  constructor() {

  }
  use_laser_vision() {
    this.superpower = 'Rasakan sinar laserku ini!!'
    return this.superpower
  }
  menghilang() {
    this.superpower = '*melempar bomb asap dan menghilang*'
    return this.superpower
  }
  terbang() {
    this.superpower = 'Terbanggggggg! *whoooosshh*'
    return this.superpower
  }

  custom() {
    return this.superpower;
  }
}

let binatang = new Animal (2, 'cold')

let kitsune = new Fox (4, 'hot')
console.log(kitsune.superpower.use_laser_vision());
// let kodok = new Frog (4, 'cold', 'Bunuuuh!!')
// console.log(kodok.superpower.custom());
let kalong = new Bat (2, 'hot')
let monyet = new Chimpanzee (2, 'hot')
let ayam = new Chicken (2, 'hot')
