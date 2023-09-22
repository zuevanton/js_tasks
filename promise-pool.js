// const run = async (fns, limit) => {
//   const result = [];
//   const queue = [];
//   let fnsRuns = 0;

//   const queueFn = async (fn) => {
//     result.push(await fn());
//     fnsRuns--;
//   }

//   for(const fn of fns) {
//     if(fnsRuns <= limit) {
//       fnsRuns++;
//       await queueFn(fn);

//     }
//   }

//   return Promise.resolve(result)
// }
const run = async (fns, limit) => {
  const result = [];
  const queue = [];
  let fnsRuns = 0;

  const queueFn = async (fn) => {
    
  }

  for(const fn of fns) {
    queueFn(fn);
  }

  return Promise.resolve(result)
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