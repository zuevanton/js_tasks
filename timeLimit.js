const timeLimit = (fn, t) => {
  return function(...args) {
    return new Promise((resolve, reject) => {
      setTimeout(() => reject('Time limit exceeded'), t)
      // fn(...args).then(
      //   value => resolve(value),
      //   reason => reject(reason)
      // )
      fn(...args).then(resolve, reject)
    })
  }
}

const timeLimit2 = (fn, t) => {
  return function(...args) {
    const promise1 = fn(...args)
    const promise2 = new Promise(resolve => {
      setTimeout(() => reject('time limit exceeded'), t)
    })

    return Promise.race([promise1, promise2])
  }
}

const fn = name => new Promise(resolve => {
  setTimeout(() => {
    resolve(`Hello, ${name}!`);
  }, 500);
});

const fn250 = timeLimit(fn, 250);
const fn1000 = timeLimit(fn, 1000);

fn250("World").then(
  value => console.log(1, value),
  reason => console.log(2, reason),  // "Time Limit Exceeded"
);

fn1000("World").then(
  value => console.log(1, value),  // "Hello, World!"
  reason => console.log(2, reason),
);