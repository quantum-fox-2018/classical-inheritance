"use strict"

class Animal{

  constructor(){

    this.num_legs=2

    this.is_warm_blooded = true

  }

}

class Unta extends Animal{

  constructor(){

    super()

    this.num_legs=4

  }

  get superpower(){

    return new SuperPower()

  }

}

class Bat extends Animal{

  constructor(){

    super()

  }

  get superpower(){

    return new SuperPower()

  }

}

class Chimpanzee extends Animal{

  constructor(){

    super()

    this.is_warm_blooded = false

  }

  get superpower(){

    return new SuperPower()

  }

}

class Kuda extends Animal{

  constructor(){

    super()

    this.num_legs = 4

  }

  get superpower(){

    return new SuperPower()

  }

}

class SuperPower{

  constructor(){

  }

  use_laser_vision(){

    return 'Rasakan kekuatan laser syariah !!'

  }

  be_invisible(){

    return 'Jurus menghilang dari muka bumi !!'

  }

}

let unta = new Unta()

console.log(unta.is_warm_blooded);

console.log(unta.num_legs);

console.log(unta.superpower.use_laser_vision());
