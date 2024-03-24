const withRetry = (sumFn, attempts) => {
  // function enhancedSum(args, attempt = 1) {
  //   return sumFn(...args).catch(reason => {
  //     if(attempt < attempts) {
  //       return enhancedSum(args, attempt + 1);
  //     }
  //     // return Promise.reject(reason)
  //     throw reason;
  //   })
  // }
  // return function(...myArgs) {
  //   return enhancedSum(myArgs, 1)
  // }

  return async function(...args) {
    for(let i = 0; i < attempts; i++) {
      try {
        return await sumFn(...args)
      } catch(e) {
        if(i === attempts - 1){
          throw e
        }
      }
    }
  }
}

const enhancedSum = withRetry(sum, 2);

let ok = 0;
let err = 0;

//     ------------------ -----------------------------------------
//           0.3            0.21                   0.49
//     ------------------ ------------ ----------------------------
//                          

for(let i = 0; i < 10_000; i++) {
  enhancedSum(3, 2).then(
    value => ok++,    // value === 5 (76% probability)
    reason => err++,  // reason === 'err' (24% probability)
  );
}

setTimeout(() => {
  console.log({ok, err})
}, 4000);

function sum(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.3) {
        resolve(a + b);
      } else {
        reject('err');
      }
    }, 500);
  });
}