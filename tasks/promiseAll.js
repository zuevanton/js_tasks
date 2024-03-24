const fn1 = () => new Promise(r => setTimeout(r, Math.random() * 1000, "🍓"));
const fn2 = () => new Promise(r => setTimeout(r, Math.random() * 1000, "🍏"));
const fn3 = () => new Promise(r => setTimeout(r, Math.random() * 1000, "🍇"));

// fn1().then(x => console.log(x))
// fn2().then(x => console.log(x))
// fn3().then(x => console.log(x))

const p = all([fn1(), fn2(), fn3()])

p.then(console.log);

// function all(promises) {
//   return new Promise((resolve, reject) => {
//     if(promises.length === 0) {
//       resolve([]);
//       return
//     }
//     const result = [];
//     let counter = 0;
    
//     for(let i = 0; i < promises.length; i++) {
//       promises[i].then(x => {
//         const promise = promises[i] instanceof Promise 
//           ? promises[i]
//           : Promise.resolve(promises[i])
//         promise.then(
//           value => {
//             result[i] = value;
//             counter++;
//             if(counter === promises.length) {
//               resolve(result)
//             }
//           },
//           reject
//         )
//       })
//     }
//   })
// }

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

