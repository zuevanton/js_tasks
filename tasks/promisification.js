const promisify = fn => {
  return (...args) => {
    return new Promise((resolve, reject) => {
      fn(...args, (error, success) => {
        if(error === null) {
          resolve(success)
        } else {
          reject(error)
        }
      })
    })
  }
  
}

function sum(a, b, cb) {
  setTimeout(() => {
    if (Math.random() < .5) {
      cb(null, a + b); // success
    } else {
      cb("error"); // bad luck
    }
  });
}

const promisifiedSum = promisify(sum);

// how we deal with async functions today
promisifiedSum(3, 4).then(
  value => console.log(value), // 7
  reason => console.log(reason), // "error"
);