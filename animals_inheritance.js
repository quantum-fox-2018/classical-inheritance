"use strict"
const {SuperPower} = require("./superPower.js");

class Animal {
  constructor(obj) {
    this.name = obj.name || "No Name";
    this.num_legs = obj.num_legs || 2;
    this.is_warm_blooded = obj.is_warm_blooded || true;
    this.superpower = new SuperPower(obj);
  }
}

module.exports = {
  Animal
}
