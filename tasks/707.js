function isHappyNumber(x, prevSums = new Set()){
  if (x === 1) {
    return true
  }
  if(prevSums.has(x)) {
    return false
  }

  prevSums.add(x)

  const sumOfSquares = x
    .toString()
    .split('')
    .reduce((acc, next) => acc + next ** 2, 0)

  return isHappyNumber(sumOfSquares, prevSums)
}

// const a = Array(150_000).fill(0);

// console.log(Math.max(...a));
// console.log(a.reduce((a, b) => Math.max(a, b), -Infinity));

function happyNumbers(x) {
  const result = [];
  for(let i = 1; i <= x; i++) {
    if(isHappyNumber(i)) {
      result.push(i)
    }
  }
  return result;
}

// console.log(happyNumbers(10)) // [1, 7, 10]
// console.log(isHappyNumber(50)) // [ 1, 7, 10, 13, 19, 23, 28, 31, 32, 44, 49 ]