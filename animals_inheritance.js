"use strict"

class Animals {
  constructor(name, legs){
    this.name       = name;
    this.num_legs   = legs;
  }
}

class Mammals extends Animals {
  constructor(blood){
    super();
    this.blood  = blood;
  }
}

class Insect extends Animals {
  constructor(habitat){
    super();
    this.habitat  = habitat;
  }
}

class SuperPower {

  fly(){
    return 'can fly!!';
  }

  fire_breathe(){
    return 'fire breathe!!'
  }
}

let animals = new Animals()
animals.name = 'qwerty'
animals.num_legs = 100
console.log(animals);

let power       = new SuperPower()
let fox         = new Mammals('warm blooded');
fox.name        = 'fox';
fox.num_legs    = 4;

let spider      = new Insect('everywhere');
spider.name     = 'spider'
spider.num_legs = 8;

console.log(fox, power.fire_breathe());
console.log(spider, power.fly());
