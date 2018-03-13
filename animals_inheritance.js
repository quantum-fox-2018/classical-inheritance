"use strict"

class Animals {
    constructor(legs,blood,food,useLaser,invisible){
        this._legs = legs || 2;
        this._blood = blood || 'warm';
        this._food = food;
        this._superpower = new SuperPower(useLaser,invisible)
    }

}

class Frog extends Animals {
    constructor(legs,blood,food,useLaser,invisible){
        super(legs,blood,food,useLaser,invisible)
    }
}

class Bat extends Animals {
    constructor(legs,blood,food,useLaser,invisible){
        super(legs,blood,food,useLaser,invisible)
    }
}

class Chimpanzee extends Animals {
    constructor(legs,blood,food,useLaser,invisible){
        super(legs,blood,food,useLaser,invisible)
    }
}

class Fox extends Animals {
    constructor(legs,blood,food,useLaser,invisible){
        super(legs,blood,food,useLaser,invisible)
    }
}

class SuperPower {
    constructor(useLaser,invisible){
        this._laser = this.use_laser_vision(useLaser)
        this._invisible = this.be_invisible(invisible)
    }
    
    use_laser_vision(useLaser){
        return `Use laser vision : ${useLaser}`;
    }
    
    be_invisible(invisible){
        return invisible;
    }
}

let superpower = new SuperPower();

let frog = new Frog(4, 'cold', 'serangga',false,false);
let bat = new Bat(2,'', 'buah',true,false);
let chimpanzee = new Chimpanzee(2, 'warm', 'pisang',false,false);
let fox = new Fox(4, '', 'daging',true,false);


console.log(fox._superpower.use_laser_vision());


console.log(frog)
console.log(bat)
console.log(chimpanzee)
console.log(fox)