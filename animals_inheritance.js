"use strict"

class Animal {
    constructor (num_legs, type) {
        this.num_legs = num_legs;
        this.type = type;
        this.superpower = new SuperPower();
    }
}

class Fox extends Animal {
    constructor (num_legs, type, lifes) {
        super(num_legs, type);
        this.lifes = lifes;
    }
}

class Chicken extends Animal {
    constructor (num_legs) {
        super(num_legs);
    }
}

class SuperPower {
    use_laser_vision() {
        console.log('Beaaaam!!!');
    }

    be_invisible() {
        console.log('Find Me!');
    }
}

var animals = new Animal(2, 'karnivora');
console.log(animals.type);

var fox = new Fox(4, 'omnivora', 'darat');
console.log(fox);

var chicken = new Chicken(2);
console.log(animals.num_legs);

fox.superpower.use_laser_vision();
chicken.superpower.be_invisible();