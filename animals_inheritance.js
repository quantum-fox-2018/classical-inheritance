"use strict"
class Superpower{
  constructor(){}

  invisible(){
    return "become invisible"
  }
  laser_vision(){
    return "shoot laser"
  }
}

class Animal{
  constructor(leg, hand, eye){
    this.leg = leg
    this.hand = hand
    this.eye = eye
  }
  eat(){
    return "animal eats"
  }

  displayProperties(){
    return `${this.leg} ${this.hand} ${this.eye}`
  }
}

class Frog extends Animal{
  constructor(leg, hand, eye, waterType, toungeLength){
    super(leg, hand, eye)
    this.waterType = waterType
    this.toungeLength = toungeLength
  }

  jump(){
    return "frog jumps"
  }

  displayProperties(){
    return `${this.leg} ${this.hand} ${this.eye} ${this.waterType} ${this.toungeLength}`
  }
}

class Bat extends Animal{
  constructor(leg, hand, eye, wing){
    super(leg,hand,eye)
    this.wing = wing
  }
  fly(){
    return "bat flies"
  }

  displayProperties(){
    return `${this.leg} ${this.hand} ${this.eye} ${this.wing}`
  }
}

class Chimpanzee extends Animal{
  constructor(leg, hand, eye, isBreastFeeding){
    super(leg, hand, eye)
    this.isBreastFeeding = isBreastFeeding
  }
  climb(){
    return "Chimpanzee climbs"
  }

  displayProperties(){
    return `${this.leg} ${this.hand} ${this.eye} ${this.isBreastFeeding}`
  }
}

class Fox extends Animal{
  constructor(leg, hand, eye, tailLength){
    super(leg, hand, eye)
    this.tailLength = tailLength
    this.superpower = new Superpower()
  }
  sneak(){
    return "Fox sneaks"
  }

  displayProperties(){
    return `${this.leg} ${this.hand} ${this.eye} ${this.tailLength}`
  }
}

class Chicken extends Animal{
  constructor(leg, hand,eye, wing, isLayEgg){
    super(leg, hand, eye)
    this.wing = wing
    this.isLayEgg = isLayEgg
    this.power = new Superpower()
  }

  layEgg(){
    return "chicken lays eggs"
  }

  displayProperties(){
    return `${this.leg} ${this.hand} ${this.eye} ${this.wing} ${this.isLayEgg}`
  }
}

var animal = new Animal(2, 2, 2)
console.log(animal.displayProperties());
console.log(animal.eat());
console.log("------------------------------");
var frog = new Frog(2,2,2,"salt water", 10)
console.log(frog.displayProperties());
console.log(frog.eat());
console.log(frog.jump());
console.log("------------------------------");
var bat = new Bat(2, 0, 0, 2)
console.log(bat.displayProperties());
console.log(bat.eat());
console.log(bat.fly());
console.log("------------------------------");
var chimpanzee = new Chimpanzee(2, 2, 2, true)
console.log(chimpanzee.displayProperties());
console.log(chimpanzee.eat());
console.log(chimpanzee.climb());
console.log("------------------------------");
var fox = new Fox(2,2,2,12)
console.log(fox.displayProperties());
console.log(fox.eat());
console.log(fox.sneak());
console.log(fox.superpower.invisible());
console.log(fox.superpower.laser_vision());
console.log("------------------------------");
var chicken = new Chicken(2,0,2,2, true)
console.log(chicken.displayProperties());
console.log(chicken.eat());
console.log(chicken.layEgg());
