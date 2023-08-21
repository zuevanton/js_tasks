function zipWith(fn,a0,a1) {
  return a0.map((item, i) => {
    if (i > a1.length - 1) return null;
    return fn(item, a1[i])
  }).filter(i => i !== null)
}

function zipWith(fn,a0,a1) {
  const length = Math.max(a0.length, a1.length);
  const result = [];
  for(let i = 0; i < length; i++) {
    result.push(fn(a0[i], a1[i]));
  }
  return result
}

const plus = (a,b) => a+b;
console.log(zipWith(plus, [0,1,2,3,4,5], [0,5,4,3,2]))
// [6,6,6,6,6  ]
console.log(zipWith( Math.pow, [10,10,10,10], [0,1,2,3] ))
//[1,10,100,1000]