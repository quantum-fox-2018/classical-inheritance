"use strict"

class Animal {
    constructor(num_legs, is_warm_blooded) {
        this.num_legs = num_legs
        this.is_warm_blooded = is_warm_blooded
        this.superpower = new SuperPower()
    }
}

class Frog extends Animal {}

class Bat extends Animal {}

class Chimpanzee extends Animal {}

class Fox extends Animal {}

class Chicken extends Animal {}

class SuperPower {
    use_laser_vision() {
        console.log('seeeeeeeeeeeer!')
    }
    be_invisible() {
        console.log('clink!')
    }
}


let binatang = new Animal(2, true)
console.log(binatang)

let kodok = new Frog(4, false)
console.log(kodok)
let kelelawar = new Bat(2, true)
console.log(kelelawar)
let simpanse = new Chimpanzee(4, true)
console.log(simpanse)
let rubah = new Fox(4, true)
console.log(rubah)
let ayam = new Chicken(2, true)
console.log(ayam)

rubah.superpower.use_laser_vision()