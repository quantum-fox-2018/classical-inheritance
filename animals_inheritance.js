"use strict"

class Hewan {

    constructor(warna, habitat) {

        this.warna = warna
        this.habitat = habitat
        this.SuperPower = new SuperPower()
    }
}

class SuperPower {

    constructor(superPower) {

        this.superPower = superPower
    }

    highJump() {

        return 'High Jump'
    }

    tikungMaster() {

        return 'Tikung Master'
    }

    glow() {

        return 'Glow in the dark'
    }
}

class Belalang extends Hewan {

    constructor(warna, habitat) {

        super(warna, habitat)
    }   
}

class Rubah extends Hewan {

    constructor(warna, habitat) {

        super(warna, habitat)
    }   
}

class LandCrocodille extends Hewan {

    constructor(warna, habitat) {

        super(warna,habitat)
    }
}

class Komodo extends Hewan {

    constructor(warna, habitat) {

        super(warna, habitat)
    }   
}

let pilihHewan = new LandCrocodille ('Abstract', 'Gang senggol')

// console.log(pilihHewan)
console.log(pilihHewan.SuperPower.tikungMaster())