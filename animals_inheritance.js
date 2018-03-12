"use strict"

class SuperPower {
  constructor(superpower) {
    this.superpower = superpower;
  }

  powerJump() {
    this.superpower = "Power Jump!";
    return this.superpower;
  }

  superWings() {
    this.superpower = "Super Wings!!";
    return this.superpower;
  }

  frozenBlast() {
    this.superpower = "Frozen Blast!";
    return this.superpower;
  }
}

class Animals {
  constructor(habitat, type) {
    this.habitat = habitat;
    this.type = type;
    this.superpower = new SuperPower();
  }
}

class gorilla extends Animals {
  constructor(habitat, type, faveFood) {
    super(habitat, type);
    this._faveFood = faveFood;
  }

  get food() {
    return this._faveFood;
  }

  set food(faveFood) {
    this._faveFood = faveFood;
  }
}

class pig extends Animals {
  constructor(habitat, type, color) {
    super(habitat, type);
    this._color = color;
  }

  get color() {
    return this._color;
  }

  set color(color) {
    this._color = color;
  }
}

class penguin extends Animals {
  constructor(habitat, type, unique) {
    super(habitat, type);
    this._unique = unique;
  }

  get unique() {
    return this._unique;
  }

  set unique(unique) {
    this._unique = unique;
  }
}

var pigs = new pig("farm", "herbivora", "pink");
console.log(pigs.superpower.powerJump());
