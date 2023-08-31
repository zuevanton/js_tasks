// class Animal {
//   constructor(name) {
//     this.name = name.toUpperCase();
//   }

//   run() {
//     return `${this.name} runs.`
//   }
// }

function Animal(name) {
  // this === { __proto__: Animal.prototype }
  this.name = name.toUpperCase();
}

// Animal.name === "Animal"
// Animal.length === 1
// Animal.prototype === { constructor: Animal }

Animal.prototype.run = function() {
  return `${this.name} runs.`
}

// class Cat extends Animal {
//   speak() {
//     return `${this.name} meows.`
//   }
// }
function Cat (name) {
  // this === { __proto__: Cat.prototype }
  Animal.call(this, name)
  // this.name = name;
} 

Cat.prototype.speak = function() {
  return `${this.name} meows`
}

// Cat.prototype.__proto__ = Animal.prototype
Object.setPrototypeOf(Cat.prototype, Animal.prototype)

const barsik = new Cat("Barsik");

// barsik === {
//   name: "BARSIK",
//   __proto__: { // ← Cat.prototype
//     constructor: Cat,
//     speak() {},
//     __proto__: { // ← Animal.prototype
//       constructor: Animal,
//       run() {},
//       __proto__: { // ← Object.prototype
//         constructor: Object,
//         toString() {},
//         hasOwnProperty() {},
//         __proto__: null, // ← null
//       }
//     }
//   }
// }

console.log(barsik.name);
console.log(barsik.speak());
console.log(barsik.run());
console.log(barsik.toString());