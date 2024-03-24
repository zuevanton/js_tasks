const flip = fn => {
  return function(...args) {
    return fn(...args.reverse())
  }
}

function print(a,b) {
  return a + " -> " + b;
}
console.log(flip(print)('5', '1', 5, 8))