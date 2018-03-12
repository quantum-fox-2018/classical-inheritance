"use strict"


class Animals {
  constructor(is_warm_blooded,num_legs) {
    this.is_warm_blooded = is_warm_blooded;
    this.num_legs= num_legs
    this.superpower = new SuperPower()

  }

  get mammals() {
    return this.is_warm_blooded;
  }
  herbivora(makanan){
    console.log(`ini ${this.is_warm_blooded} makannya ${makanan}`)
  }

}

class SuperPower {

    use_laser_vision() {
        console.log('lihat setan!')
    }
    be_invisible() {
        console.log('hilang')
    }

}

class Herbivora extends Animals {
  constructor(mammals,num_legs,terbang){
    super(mammals,num_legs)
    this.terbang=terbang

  }

  kemampuan(option){
      console.log(`hewan ${this.is_warm_blooded} bisa ${option} sambil`);
  }
}

var kuda= new Herbivora ('kuda', 'poni', 'berdarah')
kuda.herbivora('tumbuhan')
kuda.kemampuan('lari')
kuda.superpower.use_laser_vision();
