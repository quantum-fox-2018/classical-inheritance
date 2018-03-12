"use strict"
class Animal {
    constructor(num_legs,warm_blooded) {
        this._num_legs = num_legs;
        this._warm_blooded = warm_blooded;
        this._superpower = new SuperPower();
    }
}

class Frog extends Animal {

}

class Bat extends Animal {

}

class Chimpanzee extends Animal {
    
}

class Fox extends Animal {
    
}

class Chicken extends Animal {
    
}

class SuperPower {
    use_laser_vision() {
        return 'Laser vision: Phewww phewwwwww phewww';
    }

    be_invisible() {
        return 'Invisible: bzzzzttttttt';
    }
}


// let binatang = new Animal(2,true);
// console.log(binatang);

let kodok = new Frog(4,false);
console.log(kodok);
console.log(kodok._superpower.use_laser_vision())

let kewong = new Bat(4,true);
// console.log(kewong);

let simpanse = new Chimpanzee(2,true);
// console.log(simpanse);

let rubah = new Fox(4,true);
// console.log(rubah);

let petok = new Chicken(2,true);
// console.log(petok);
