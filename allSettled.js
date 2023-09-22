function all(promises) {
  return new Promise((resolve, reject) => {
    const result = [];
    let counter = 0;
    let length = 0;

    for(const item of promises) {
      const promise = item instanceof Promise 
        ? item
        : Promise.resolve(item);
      const index = length;
      promise.then(
        value => {
          result[index] = value;
          counter++;
          if(counter === length) {
            resolve(result)
          }
        }, 
        reject
      );
      length++;
    }
    if(length === 0) {
      resolve([])
    }
  })
}

function allSettled(promises) {
  // return new Promise((resolve, reject) => {
  //   const result = [];
  //   let counter = 0;
  //   let length = 0;
  //   for(const item of promises) {
  //     const promise = item instanceof Promise 
  //       ? item
  //       : Promise.resolve(item);
  //     const index = length;
  //     promise.then(
  //       value => ({status: 'fulfilled', value}),
  //       error => ({status: 'rejected', error}),
  //     ).then(x => {
  //       result[index] = x;
  //       counter++;
  //       if(counter === length) {
  //         resolve(result)
  //       }
  //     })
  //     length++;
  //   }
  //   if(length === 0) {
  //     resolve([])
  //   }
  // })
  return Promise.all(Array.from(promises).map(promise => {
    return promise.then(value => ({status: 'fulfilled', value}), reason => ({status: 'rejected', reason}))
  }))
}

const fn1 = () => new Promise(r => setTimeout(r, Math.random() * 1000, "🍓"));
const fn2 = () => new Promise(r => setTimeout(r, Math.random() * 1000, "🍏"));
const fn3 = () => new Promise(r => setTimeout(r, Math.random() * 1000, "🍇"));

const p = allSettled([fn1(), fn2(), Promise.reject(123), fn3(),])

p.then(console.log);