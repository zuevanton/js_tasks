function any(promises) {
  return new Promise((resolve, reject) => {
    const errors = []
    let length = 0;
    for(const item of promises) {
      const promise = item instanceof Promise 
        ? item
        : Promise.resolve(item);

      promise.then(
        resolve, 
        error => {
          errors.push(error)
          if(errors.length === length) {
            const e = new Error("some error");
            e.errors = errors;
            reject(e)
          }
        }
      );
      length++;
    }
    if(length === 0) {
      resolve([])
    }
  })
}


const fn1 = () => new Promise(r => setTimeout(r, Math.random() * 1000, "🍓"));
const fn2 = () => new Promise(r => setTimeout(r, Math.random() * 1000, "🍏"));
const fn3 = () => new Promise(r => setTimeout(r, Math.random() * 1000, "🍇"));

const p = any([Promise.reject(123), Promise.reject(23),Promise.reject(23), fn1() ])

p.then(console.log)
.catch(console.log);