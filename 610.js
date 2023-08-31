// function max() {
//   return Math.max.apply(null, arguments);
// }

// const max = (...args) => Math.max(...args)
// const max = Math.max
const {max} = Math

function filterNumbers() {
  return Array.prototype.filter.call(arguments, function(value) {
    return isNumeric(value);
  });
}
function filterNumbers(...args) {
  return args.filter(isNumeric)
}


function isNumeric(n) {
return !isNaN(n) && Number(n) === n;
}

function filterRange(min, max) {
var args = Array.prototype.slice.call(arguments, 2);
return Array.prototype.filter.call(args, function(value) {
  return min <= value && value <= max;
});
}

function filterRange(min, max, ...args) {
  return args.filter(x => min <= x && x <= max)
}

class Lazy {
  #fns = [];

  add(fn, ...fnArgs) {
    this.#fns.push({fn, fnArgs})
    return this
  }

  invoke(target) {
    for(const {fn, fnArgs} of this.#fns) {
      target = fn(...fnArgs, ...target)
    }
    return target
  }
}
const test = new Lazy();

test.fns

const arr = [1, 8, 6, [], "7", -1, {v: 5}, 4]
console.log(
  test.add(filterNumbers)
    .add(filterRange, 2, 7)
    .add(max)
    .invoke(arr)
)

// class Lazy {
//   constructor() {
//     this.fnChain = [];
//   }
//   add(fn, ...args) {
//     this.fnChain.push(fn.bind(this, ...args));
//     return this;
//   }
//   invoke(args) {
//     return this.fnChain.reduce((args, fn) => fn(...args), args);
//   }
// }