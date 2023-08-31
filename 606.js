"use strict";

class Person {
  constructor(firstName = 'John', lastName = 'Doe', age = 0, gender = 'Male') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }

  sayFullName() {
    return this.firstName + ' ' + this.lastName;
  }

  static greetExtraTerrestrials(raceName) {
    return `Welcome to Planet Earth ${raceName}`
  }
}

function greetExtraTerrestrials(raceName) {
  return `Welcome to Planet Earth ${raceName}`
}

// window.parseInt
// global.parseInt

const package = 4;


// greetExtraTerrestrials("qwert");