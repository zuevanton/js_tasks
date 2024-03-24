const sleep = ms => (arg) => new Promise(r => setTimeout(r, ms, arg))

const makePromise = (val, ms) => new Promise(r => setTimeout(r, ms, val));

const multiplyBy3 = x => makePromise(x * 3, 500);
const divideBy5 = x => makePromise(x / 5, 1500);
const square = x => makePromise(x ** 2, 2000);

console.log(new Date().getSeconds())
multiplyBy3(10)
  .then(x => divideBy5(x))
  .then(sleep(2000)) // add aditional 2 seconds
  .then(x => square(x))
  .then(x => console.log(x))
  .then(() => console.log(new Date().getSeconds())); // 36 in 6 seconds

