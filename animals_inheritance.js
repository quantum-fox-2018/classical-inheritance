"use strict"
class Animal {
  constructor(name, weight, warmBlooded) {
    this.name = name;
    this.weight = weight;
    this.is_warm_blooded = warmBlooded;
    this.super_Power = new SuperPower();
    // this.num_legs = legs;
  }
}

class Mammals extends Animal {
  constructor(name, weight, warmBlooded, legs, height, carnivore) {
    super(name, weight, warmBlooded);
    this.legs = legs;
    this.height = height;
    this.carnivore = carnivore;
  }
}

class Aquatic extends Animal {
  constructor(name, weight, warmBlooded, fins, length, carnivore) {
    super(name, weight, warmBlooded);
    this.fins = fins;
    this.length = length;
    this.carnivore = carnivore;
  }
}

class SuperPower {
  constructor() {

  }

  use_laser_vision(){
    return 'Pancarkan cahaya keemasan!';
  }

  invisible(){
    return 'Telah Menghilang!';
  }

  flameBurst(){
    return 'Mengeluarkan api!';
  }

  instaDead(){
    return 'Telah Mati';
  }
}

let animal = new Animal('Unicorn', '80kg', true);
console.log(animal);

//Mammals
let bat = new Mammals('Bat', '21-60 g', false, 2, '40 cm', true);
console.log(bat);
console.log(bat.name+' dengan berat: '+bat.weight+' '+bat.super_Power.instaDead());


let Bear = new Mammals('Brown Bear', '90-115 kg', true, 4, '60-90 cm', true);
console.log(Bear);
console.log(Bear.name+': '+Bear.super_Power.flameBurst());


//Aquatic
let shark = new Aquatic('Shark', '30-52 kg', false, 5, '2.7-3.8 m', true);
console.log(shark.name, shark.super_Power.invisible());

let blueWhale = new Aquatic('Blue Whale', 'Up to 200 tons', false, 4, '82 to 105 ft', true);
console.log(blueWhale.name, blueWhale.super_Power.use_laser_vision());
