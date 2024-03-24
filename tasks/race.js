function race(promises) {
  return new Promise((resolve, reject) => {
    for(const item of promises) {
      const promise = item instanceof Promise 
        ? item
        : Promise.resolve(item);
      promise.then(resolve, reject)
    }
  })
}


const fn1 = () => new Promise(r => setTimeout(r, Math.random() * 1000, "🍓"));
const fn2 = () => new Promise(r => setTimeout(r, Math.random() * 1000, "🍏"));
const fn3 = () => new Promise(r => setTimeout(r, Math.random() * 1000, "🍇"));

const p = race([ fn1(), fn2(), fn3()])

p.then(console.log)
.catch(console.log);