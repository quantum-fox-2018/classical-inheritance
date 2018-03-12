class SuperPower {
  constructor(obj) {
    this.name = obj.name;
    this.superpower = obj.superpower;
  }

  user_laser_vision() {
    this.superpower = `${this.name} 'laser vision': on`;
    return this.superpower;
  }

  be_invisible() {
    this.superpower = `${this.name} 'invisible': on`;
    return this.superpower;
  }

  custom_power() {
    return `${this.name} '${this.superpower}': on`;
  }
}

module.exports = {
  SuperPower
}
