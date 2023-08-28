// работает с одним аргументом, проходит все тесты, но по идее не должно. Ведь может прийти несколько аргументов

// cache = {
//   result: 0,
//   arg2Cache: Map {
//     1 => {
//       result: 1,
//       arg2Cache: Map {
//         2 => {
//           result: 3,
//           arg2Cache: Map {
//              3 => { result: 6 }
//           },
//         },
//         7 => {
//           result: 8,
//         },
//     },
//     5 => {
//       result: 5,
//       arg2Cache: Map {
//         2 => {
//           result: 7,
//           arg2Cache: Map {
//             10 => {
//               result: 17,
//             },
//         },
//         9 => {
//           result: 14,
//         },
//     },
//   }
// }


sum();
sum(1);
sum(5);
sum(1, 2);
sum(1, 2, 3);
sum(1, 7);
sum(5, 2);
sum(5, 2, 10);
sum(5, 9);

function sum(...args) {
  return args.reduce((a, b) => a + b, 0);
}


function memo(fn) {
  const cache = new Map();

  return function(args) {
    // const argsStr = args.join('')
    if(cache.has(args)) {
      return cache.get(args)
    } else {
      const result = fn(args)
      cache.set(args, result)
      return result
    }
  };
}

const multiply = (n, n2) => {
  for(let i = 0; i < 3000000000; i++) {
    
  }
  return n*2;
}

const cached = memo(multiply)
console.log(new Date())
console.log(cached(5, 5))
console.log(new Date())
console.log(cached(5, 2))
console.log(new Date())