// Promise.resolve() // F
//   .then(() => console.log(0));  // P → F

// Promise.resolve() // F
//   .then(() => console.log(1))  // P → F
//   .then(() => console.log(2)); // P → F

// Promise.resolve() // F
//   .then(() => console.log(3))  // P → F
//   .then(() => console.log(4))  // P → F
//   .then(() => console.log(5)); // P → F

// 013245


// const first = () => new Promise(r => setTimeout(r, 1000, 'first'));
// const second = () => new Promise(r => setTimeout(r, 2000, 'second'));

// first().then(second()).then(console.log);

// first().then(second).then(console.log);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch
Promise.prototype.myCatch = function(fn) {
  return this.then(undefined, fn)
}

Promise.resolve(10)
  .then(x => x + 100)
  // .then(x => {
  //   throw x * 2;
  // })
  .then(x => x + 20)
  .then(x => x + 30)
  .myCatch(x => {
    console.log(x);
  })
  .then(console.log)


// https://sinyakov.com/javascript/workbook/async/promise-pool.html
