const SumSquares = arr => arr.reduce((acc, next) => {
  if(Array.isArray(next)) {
    return acc + SumSquares(next)
  }
  return acc + next * next
}, 0)

const arr = [7, [6, 8], [[1, [2]], [3], [4, [5]]], 9];

// sum    7 + 9 + 6 + 8,
// queue [[3], [4, [5]], 1, [2]]
// stack

const SumSquares2 = arr => {
  const stack = [...arr];
  let result = 0;

  while(stack.length !== 0){
    const lastElem = stack.pop();

    if(Array.isArray(stack)) {
      stack.push(...lastElem)
    } else {
      result += lastElem ** 2;
    }
  }

}
console.log(SumSquares(arr))