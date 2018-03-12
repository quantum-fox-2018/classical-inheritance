"use strict"
class Animals {
  constructor(numLegs, isWarmBlooded){
      this.num_legs = numLegs
      this.is_warm_blooded = isWarmBlooded
      this.superpower = new SuperPower()
  }
}

class frog extends Animals {
  constructor(numLegs, isWarmBlooded){
    super(numLegs, isWarmBlooded)
  }
}

class bat extends Animals {
  constructor(numLegs, isWarmBlooded){
      super(numLegs, isWarmBlooded)
  }
}

class chimpanzee extends Animals {
  constructor(numLegs, isWarmBlooded){
      super(numLegs, isWarmBlooded)
  }
}

class fox extends Animals {
  constructor(numLegs, isWarmBlooded){
      super(numLegs, isWarmBlooded)
  }
}

class chicken extends Animals {
  constructor(numLegs, isWarmBlooded){
    super(numLegs, isWarmBlooded)
  }
}


class SuperPower{
  constructor(){
     // this.superpower = ability
    // return this.superpower
  }
  use_laser_vision(){
     this.superpower = 'firee !!!'
     return this.superpower
  }
  be_invicible(){
    this.superpower = 'abrakadabra !'
    return this.superpower
  }
  melee_bomb(){
    this.superpower = 'boooooooom !'
    return this.superpower
  }
  low_gravity(){
    this.superpower = 'terbaaaaang !'
    return this.superpower
  }
  // customAbilyty(){
  //   return this.superpower
  // }
}

var bekicot = new Animals(2,false)
console.log(bekicot)
var koba = new chimpanzee(2,true)
console.log(koba)
var bruce = new bat(2,false)
console.log(bruce)
var sapi = new fox(4,true)
console.log(bruce)
var ayam = new chicken(2,false)
console.log(ayam)
console.log(sapi.superpower.use_laser_vision())
