"use strict"
class Animal{
  constructor(name){
    this._name=name
    this._num_legs=2
    this._superpower=new SuperPower(name)
  }

}

class Panda extends Animal{
  constructor(name){
    super(name)
  }
  isNocturnal(){
    return false
  }
}

class Wolf extends Animal{
  constructor(name){
    super(name)
    this._num_legs=4
  }
  isNocturnal(){
    return true
  }
}

class Owl extends Animal{
  constructor(name){
    super(name)
  }

  isNocturnal(){
    return true
  }
}

class SuperPower{
  constructor(name){
    this.name=name
  }

  stun_enemy(){
    console.log(this.name+' stunned enemy for 5 seconds');
  }

  evolution_to_werewolf(){
    console.log(this.name+' turn into werewolf');
  }

  not_sleep(){
    console.log(this.name+' not sleep for a month');
  }
}

// let newAnimal= new Animal('')
let newPanda = new Panda('panda')
let newWolf = new Wolf('wolf')
let newOwl = new Owl('owl')
console.log(newPanda);
console.log(newWolf);
console.log(newOwl);
console.log(newPanda.isNocturnal());
console.log(newWolf.isNocturnal());
console.log(newOwl.isNocturnal());
newPanda._superpower.stun_enemy();
newWolf._superpower.evolution_to_werewolf();
newOwl._superpower.not_sleep();
