"use strict"

class SuperPower{
  constructor(){

  }

  use_laser_vision(){
    return 'LASER BEEAAAAAAMMM !!!';
  }

  be_invisible(){
    return 'now you see me, now you dont';
  }
}


class Animal{
  constructor(species, options){
    this.species = species;
    this.can_fly = 'maybe';
    this.sup = options;
  }
}

class Frog extends Animal{
  constructor(species,size, options){
    super(species,options);
    this.size = size;
  }
}

class Bat extends Animal{
  constructor(species, suck_blood, options){
    super(species,options);
    this.suck_blood = suck_blood;
  }
}



var animal = new Animal('any');
var sup = new SuperPower();

console.log('animal' + ': species => ' + animal.species + ' / can fly =>' + animal.can_fly + '\n');

var frog = new Frog('amphibian','small',sup);
animal.can_fly = 'cannot';

console.log('animal' + ': species =>' +animal.species + ' / can fly =>' + animal.can_fly);
console.log('frog' + ': species =>' +frog.species + ' / can fly =>' + frog.can_fly + ' / size =>' + frog.size + '\n');

var bat = new Bat('mammal','not all',sup);
bat.can_fly = 'can';
animal.suck_blood = 'because they are vampire'

console.log('animal' + ': species =>' +animal.species + ' / can fly =>' + animal.can_fly  + ' / ' + animal.suck_blood);
console.log('bat' + ': species =>' +bat.species + ' / can fly =>' + bat.can_fly + ' / ' + bat.suck_blood + '\n');

console.log(frog.sup.use_laser_vision());
console.log(bat.sup.be_invisible());
