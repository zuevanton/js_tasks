const add = sum => {
  function fn(x) {
    return add(sum + x);
  }
  
  fn[Symbol.toPrimitive] = () => sum;
  
  return fn;
}


function f() {

  // inner.x = 1;

 return function inner() {
    // ...
  }
}

const fn = add(1)(2)(3);
console.log(+fn); // == 6

fn(100)
fn(100)
fn(100)
fn(100)
fn(100)
fn(100)
fn(100)
fn(100)
fn(100)

console.log(+fn(100)(200)(300)); // 606
console.log(+fn(1000)(1000)(10000)); // 12006

// const addTwo = add(2);
// console.log(+addTwo)

// const a = add(1)(2);
// const b = add(3)(4);

// console.log(3 == a) // true
// console.log(7 == b) // true
// console.log(a(b) == 10) // true 