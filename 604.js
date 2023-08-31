// class NamedOne {
//   constructor(first, last) {
//     this.firstName = first;
//     this.lastName = last;
//   }

//   get fullName() {
//     return this.firstName + ' ' + this.lastName
//   }

//   set fullName(str) {
//     const [firstName, lastName] = str.split(' ');

//     if(firstName !== undefined && lastName !== undefined) {
//       [this.firstName, this.lastName] = [firstName, lastName]
//     }
//   }
// }

function NamedOne(first, last) {
  // this = { __proto__: NamedOne.prototype }
  this.firstName = first;
  this.lastName = last;
  // return this
}

Object.defineProperty(NamedOne.prototype, 'fullName', {
  get: function() {
    return this.firstName + ' ' + this.lastName
  },
  set: function(str) {
    const [firstName, lastName] = str.split(' ');

    if(firstName !== undefined && lastName !== undefined) {
      [this.firstName, this.lastName] = [firstName, lastName]
    }
  }
})

var namedOne = new NamedOne("Naomi","Wang")

namedOne.firstName
namedOne.lastName
namedOne.__proto__

namedOne.__proto__.fullName
// namedOne.__proto__ === NamedOne.prototype


namedOne.firstName = "John"
namedOne.lastName = "Doe"
// ...then...
console.log(namedOne.fullName) // -> "John Doe"

// -- And :
namedOne.fullName = "Bill Smith"
// ...then...
console.log(namedOne.firstName) // -> "Bill"
console.log(namedOne.lastName)  // -> "Smith"

// -- But :
namedOne.fullName = "Tom" // -> no : lastName missing
namedOne.fullName = "TomDonnovan" // -> no : no space between first & last names
namedOne.fullName // -> "Bill Smith" (unchanged)
console.log(namedOne)