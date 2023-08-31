"use strict";

// just a small amount of possible functions to start testing with.
var addOne = function(e) {return e + 1;};
var square = function(e) {return e * e;};

// Extend the Function prototype with a method pipe
Function.prototype.pipe = function(a) {
  console.log("pipe this", this);
  const that = this;
  return function(x) {
    console.log("this", this);
    return a(that(x))
  }
}
Function.prototype.pipe = function(a) {
  function inner(x) {
    console.log("this", this);
    return a(that(x))
  }

  const boundInner = inner.bind(this);

  return boundInner;
}

Function.prototype.pipe = function(a) {
  return function(x) {
    console.log("this", this);
    return a(that(x))
  }.bind(this);
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this

const foo = addOne.pipe(square);

console.log(foo(20)) // 441