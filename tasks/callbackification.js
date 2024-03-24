const callbackify = fn => {
  return (...args) => {
    const cb = args.at(-1)
    fn(...args.slice(0, -1)).then(
      value => {
        cb(null, value)
      },
      error => {
        cb(error)
      }
    )
  }
}

async function sum(a, b) {
  if (Math.random() < .5) {
    return a + b; // success
  }
  throw "error"; // bad luck
}

// in case you want to get nostalgic
const callbackifiedSum = callbackify(sum);

callbackifiedSum(2, 5, (err, result) => {
  if (err === null) {
    console.log(result); // 7
  } else {
    console.log(err)
  }
});