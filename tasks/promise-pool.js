const run = (fns, limit) => {
  return new Promise(resolve => {
    const result = [];
    let fnsFulfilled = 0;
    let index = 0;
    const runFn = () => {
      const savedIndex = index
      index++;

      if(fnsFulfilled === fns.length) {
        resolve(result)
        return;
      }
      if (index !== fns.length) {
        fns[index]().then(r => {
          result[savedIndex] = r;
          fnsFulfilled++;
          runFn();
        });
      }
    }

    for(let i = 0; i < limit; i++){
      runFn();
    }
  })
}

const fn1 = () => new Promise(r => setTimeout(r, 3400, "a"));
const fn2 = () => new Promise(r => setTimeout(r, 600, "b"));
const fn3 = () => new Promise(r => setTimeout(r, 2000, "c"));
const fn4 = () => new Promise(r => setTimeout(r, 1400, "d"));
const fn5 = () => new Promise(r => setTimeout(r, 1800, "e"));
const fn6 = () => new Promise(r => setTimeout(r, 400, "f"));


run([fn1, fn2, fn3, fn4, fn5, fn6], 2).then(arr => {
  console.log(arr); // arr === ["a", "b", "c", "d", "e", "f"]
});