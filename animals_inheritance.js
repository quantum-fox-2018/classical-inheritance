"use strict"

class Animals{
    constructor(name, num_legs, status) {
        this._name = name || 'Animal No Name'
        this._num_legs = num_legs || 2
        this._is_warm_blooded = status || true
    }

}

class Frog extends Animals{
    constructor(name, status){
        super(name, status)
        this._name = 'Frog'
        this._is_warm_blooded = false
    }
}

class Bat extends Animals{
    constructor(name){
        super(name)
        this._name = 'Bat'
        this._unique = this.unique()
    }

    unique(){
        return this._unique = 'I Can Suck Blood'
    }
}

class Chimpanzee extends Animals{
    constructor(name){
        super(name)
        this._name = 'Simpanse'
    }
}

class Fox extends Animals{
    constructor(name, num_legs){
        super(name, num_legs)
        this._name = 'Kyubi'
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

let animal = new Animals()
console.log(animal);


let frog = new Frog()
console.log(frog);

let bat = new Bat()
console.log(bat);

let simpanse = new Chimpanzee()
console.log(simpanse);

let fox = new Fox()
console.log(fox);

let chick = new Chicken('Ayam Kampung', 'Bertelur')
console.log(chick);
