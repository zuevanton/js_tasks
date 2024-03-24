function solve(arr){
  // const obj0 = arr.reduce((acc, i) => {
  //   acc[i] ? acc[i]++ : acc[i] = 1;
  //   return acc
  // }, {})

  const obj = {};
  for(const num of arr) {
    // if (obj[num] === undefined) {
    //   obj[num] = 0;
    // }

    obj[num] ??= 0;
    obj[num] += 1;
    
    
    // obj[num] = obj[num] ?? 0;
    // obj[num] = obj[num] + 1;
  }

  return Object.keys(obj)
    .sort((a, b) => {
      // if (obj[a] > obj[b]) {
      //   return -1;
      // }
      // if (obj[b] > obj[a]) {
      //   return -1;
      // }
      // return +a < +b ? -1 : 1;
      return obj[b] - obj[a] || a - b;
    })
    .flatMap(key => Array(obj[key]).fill(+key));
  
  // const array2D = []
  // for(let key in obj){
  //   array2D.push([+key, obj[key]])
  // }
  // const result = []
  // array2D
  //   .sort((a, b) => {
  //     if(a[1] > b[1]) return -1
  //     if(a[1] < b[1]) return 1
  //     if(a[0] > b[0]) return 1 
  //     return -1
  //   })
  //   .forEach(item => {
  //     for(let i = 0; i < item[1]; i++){
  //       result.push(item[0])
  //     }
  //   })
  // return result
}

console.log(solve([2,3,5,3,7,9,5,3,7]));

// 110 111 114 200 202 208 210 212 214 220