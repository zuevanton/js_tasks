// just a small amount of possible functions to start testing with.
var addOne = function(e) {return e + 1;};
var square = function(e) {return e * e;};

// Extend the Function prototype with a method pipe
Function.prototype.pipe = function(a) {
  const fn = this;
  return function(...args) {
    console.log(fn)
    return fn(...args)
  }
}

let result = [1,2,3,4,5].map(addOne.pipe(square))
console.log(result)