"use strict"
class animals {
  constructor(jenisMakanan,lingkunganHidup,specialCharacteristics,superpower){

    this._jenisMakanan = jenisMakanan;
    this._lingkunganHidup = lingkunganHidup;
    this._specialCharacteristics = '';
    this._superpower = superpower;
  }

  get jenisMakanan(){
    return this._jenisMakanan
  }
  get lingkunganHidup(){
    return this._lingkunganHidup;
  }
  get superpower(){
    this._superpower = superpower
    return this._superpower;
  }
}

class Jerapah extends animals {
  constructor(jenisMakanan,lingkunganHidup,specialCharacteristics,numLegs,superpower){
    super(jenisMakanan,lingkunganHidup,specialCharacteristics);
    this._numLegs = numLegs;
    this._specialCharacteristics = specialCharacteristics
  }

  get numLegs(){
    return this._numLegs;
  }

  get specialCharacteristics(){
    return this._specialCharacteristics;
  }
}

class Burung extends animals {
  constructor(jenisMakanan,lingkunganHidup,specialCharacteristics,reproduksi,superpower){
    super(jenisMakanan,lingkunganHidup,specialCharacteristics);
    this._specialCharacteristics = specialCharacteristics;
    this._reproduksi = reproduksi;
  }

  get reproduksi(){
    return this._reproduksi;
  }

  get specialCharacteristics(){
    return this._specialCharacteristics;
  }
}


class SuperPower{
  constructor(){
    this._superpower = '';
  }

  use_laser_vision(){
    this._superpower = 'Serangan laser';
    return this._superpower;
  }
  be_invicible(){
    this._superpower = 'Hilang';
    return this._superpower;
  }

  get superpower(){
    return this._superpower;
  }
}

let superpower = new SuperPower();
superpower.be_invicible();

let jerapah = new Jerapah('Herbivora','Darat','Leher Panjang',4,superpower);
let burung = new Burung('Karnivora','Udara','Bersayap','Bertelur',superpower);
console.log(jerapah.superpower.be_invicible());
