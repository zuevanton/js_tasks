"use strict";

// function arrayDiff(a, b) {
//   return a.filter(item => {
//     let flag = true;
//     for (const i of b){
//       if (item === i) {
//         flag = false;
//       }
//     }
//     return flag
//   })
// }

// [3, 0, 6, 2, 7].filter(x => {
//   return ???
// });

const arrayDiff2 = (a, b) => {
  const s = new Set(b);
  return a.filter(i => !s.has(i))
}


// console.time("qwerty");
// for(let i = 0; i < 1e9; i++);
// console.timeEnd("qwerty");

const N = 300000;

const a = [];
const b = [];

for(let i = 1; i <= N; i++) {
  a.push(i);
  b.push(-i);
}

// 10_000 × 10_000 === 100_000_000
// 20_000 × 20_000 === 400_000_000

// 10000: 180.081ms
// 20000: 466.466ms
// 30000: 1.234s

console.time(N);
arrayDiff2(a, b);
console.timeEnd(N);

// console.log(arrayDiff2([1, 2, 3, 4], [2, 4, 6])) // [1, 3]