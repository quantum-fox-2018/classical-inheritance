"use strict"

class Animals{
    constructor(name, num_legs, status) {
        this._name = name || 'Animal No Name'
        this._num_legs = num_legs || 2
        this._is_warm_blooded = status || true
        this._superpower = new SuperPower(this._name)
    }

}

class Frog extends Animals{
    constructor(name){
        super(name)
        this._is_warm_blooded = false
    }
}

class Bat extends Animals{
    constructor(name){
        super(name)
        this._unique = this.unique()
    }

    unique(){
        return this._unique = 'I Can Suck Blood'
    }
}

class Chimpanzee extends Animals{
    constructor(name){
        super(name)
        this._color = 'Grey and White'
    }
}

class Fox extends Animals{
    constructor(name, num_legs){
        super(name, num_legs)
        this._num_legs = 4
        this._unique = 'I Have 9 Tails'

    }
}

class Chicken extends Animals{
    constructor(name, unique){
        super(name)
        this._name = name
        this._unique = unique
    }
}

class SuperPower{
    constructor(animal_name){
        this._animal_name = animal_name
    }

    use_laser_vision(){
        return `${this._animal_name} using laser vision!`
    }

    be_invisible(){
        return `${this._animal_name} being invisible!`        
    }
}

let animal = new Animals()
console.log(animal);


let frog = new Frog('Frog')
console.log(frog);

let bat = new Bat('Kalong')
console.log(bat);
console.log(bat._superpower.be_invisible());


let simpanse = new Chimpanzee('Simpanse')
console.log(simpanse);

let fox = new Fox('Kyubi')
console.log(fox);
console.log(fox._superpower.use_laser_vision());


let chick = new Chicken('Ayam Kampung', 'Bertelur')
console.log(chick);
