// Array.prototype.insert = function(index, value) {
//   this.splice(index, 0, value)
//   return this
// }

Object.defineProperty(Array.prototype, 'insert', {
  value: function(index, value) {
    this.splice(index, 0, value)
    return this
  },
  enumerable: false
})


console.log([0].insert(10, 2).insert(0, 10)) 
const arr = [1,2,3,4];
