"use strict"
class SuperPower{
    constructor(){
        
    }

    super_strength(){
        return 'it lifted the bus!';
    }

    use_laser_vision(){
        return 'it cut through the metal!';
    }
}

class Animals extends SuperPower{
    constructor(){
        super();
        this.habitat = 'on Land'
        this.legs = 4;
    }
}

class Frog extends Animals{
    constructor(){
        super();
        this.legs = 4;
        this.sound = 'ribbit'
    }
}

class Chikin extends Animals{
    constructor(){
        super();
        this.legs = 2;
        this.sound = 'pokpok'
    }
    makeSound(){
        return this.sound;
    }
}

class Horseee extends Animals{
    constructor(){
        super();
        this.legs = 4
        this.sound = 'neigh'
    }
    
    makeSound(){
        return this.sound;
    }
}


var superChiken = new Chikin;

var power = new SuperPower;

console.log(power.super_strength());

superChiken.super_strength();