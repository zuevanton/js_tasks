const add = n => {
  let sum = n;

  fn[Symbol.toPrimitive] = function(hint) {
    // if(hint == 'number' || hint == 'string' || hint == 'boolean' || hint == 'default') {
    //   return sum
    // }
    return sum
  }

  function fn(x) {
    sum += x;
    return fn
  }

  return fn
}

const addTwo = add(2);
console.log(+addTwo)

const a = add(1)(2);
const b = add(3)(4);

console.log(3 == a) // true
console.log(7 == b) // true
console.log(a(b) == 10) // true 