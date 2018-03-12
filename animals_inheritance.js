"use strict"

class SuperPower {
  constructor(nightVision,superSpeed) {
    this.nightVision = this.nightVisionAbility(nightVision)
    this.superSpeed = this.superSpeedAbility(superSpeed)
  }

  nightVisionAbility(input){
    if(input == true){
      return `Yes it has Night Vision Ability`
    } else {
      return `No it is blind in the dark`
    }
  }

  superSpeedAbility(input){
    if(input == true){
      return `Yes it has Super Speed Ability`
    } else {
      return `No it is so slow`
    }
  }
}

class Animal {
  constructor(habitat,primaryFood,nightVision,superSpeed) {
    this.habitat = habitat
    this.numLegs = 4
    this.primaryFood = primaryFood
    this.superPower = new SuperPower(nightVision,superSpeed)
  }
}

class Cat extends Animal {
  constructor(habitat,primaryFood,nightVision,superSpeed) {
    super(habitat,primaryFood,nightVision,superSpeed)
  }
}

class Fish extends Animal {
  constructor(habitat,primaryFood,nightVision,superSpeed) {
    super(habitat,primaryFood,nightVision,superSpeed)
  }
}

class Ant extends Animal {
  constructor(habitat,primaryFood,nightVision,superSpeed) {
    super(habitat,primaryFood,nightVision,superSpeed)
  }
}

const cat = new Cat('Land','Meat',true,true)
const fish = new Fish('Water','Plankton',true,false)
const ant = new Ant('Land','Sugar',false,false)

fish.numLegs = 0
ant.numLegs = 6
console.log(cat)
console.log(fish)
console.log(ant)
