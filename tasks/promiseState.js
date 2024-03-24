function getPromiseState(promise) {
  return new Promise((resolve) => {
    promise.then(
      value => {
        resolve('fulfilled')
      },
      reason => {
        resolve('rejected')
      }
    );
    // ...
    queueMicrotask(() => resolve('pending'))
  })
}

// getPromiseState(Promise.resolve("✅"))
//   .then(state => console.log("👀 fulfilled", state, state === "fulfilled"));

// getPromiseState(Promise.reject("💣"))
//   .then(state => console.log("👀 rejected", state, state === "rejected"));

// getPromiseState(new Promise(() => {}))
//   .then(state => console.log("👀 pending", state, state === "pending"));


console.log('begins'); // 1

setTimeout(() => {
  console.log('setTimeout 1'); // 3
  Promise.resolve().then(() => {
    console.log('promise 1'); // 4 
  });
}, 0);

new Promise(function (resolve, reject) {
  console.log('promise 2'); // 2
  setTimeout(function () {
    console.log('setTimeout 2'); // 5
    resolve('resolve 1');
  }, 0);
}).then((res) => {
  console.log('dot then 1'); //6
  setTimeout(() => {
    console.log(res); // 7
  }, 0);
});
