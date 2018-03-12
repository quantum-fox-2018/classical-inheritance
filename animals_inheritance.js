"use strict"

class Animal{
  constructor(warna, tinggi, berat, num_legs){
    this.warna = warna
    this.tinggi = tinggi
    this.berat = berat
    this.num_legs = num_legs
    this.superpower = new SuperPower()
  }
}

class Frog extends Animal{
  constructor(warna, tinggi, berat, num_legs){
    super(warna, tinggi, berat, num_legs)
    // this.
  }
}

class Bat extends Animal{
  constructor(warna, tinggi, berat, num_legs){
    super(warna, tinggi, berat, num_legs)
  }
}

class Chimpanzee extends Animal{
  constructor(warna, tinggi, berat, num_legs){
    super(warna, tinggi, berat, num_legs)
  }
}

class Fox extends Animal{
  constructor(warna, tinggi, berat, num_legs){
    super(warna, tinggi, berat, num_legs)
  }
}

class Chicken extends Animal{
  constructor(warna, tinggi, berat, num_legs){
    super(warna, tinggi, berat, num_legs)
  }
}

class SuperPower{
  use_laser_vision(){
    // return 'kamehameha...'
    console.log('kamehameha...')
  }

  be_invisible(){
    // return 'cling!!!!'
    console.log('cling!!!!')
  }
}

var animal = new Animal('merah', 2, 100, 4)
var frog = new Frog('hijau', 1, 1, 2)
console.log(frog)

console.log(frog.superpower.be_invisible())
