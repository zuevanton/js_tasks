const takeWhile = (arr, pred) => {
  let end = arr.findIndex(item => !pred(item))
  if(end === -1) {
    end = arr.length;
  }
  return arr.slice(0, end)
}
const dropWhile = (arr, pred) => {
  const start = arr.findIndex(item => !pred(item))
  if(start === -1) {
    return []
  }
  return arr.slice(start)
}
const span = (arr, pred) => {
  return [takeWhile(arr, pred), dropWhile(arr, pred)]
}


function isEven(x) {
  return Math.abs(x) % 2 === 0;
}

function isOdd(x) {
  return Math.abs(x) % 2 !== 0;
}

var arr1 = [2,4,6,1,4,8];
var arr2 = [1,4,5,7,6];
var arr3 = [13,17,19,11,21];

console.log(span(arr1, isEven)) // [[2,4,6],[1,4,8]]
console.log(span(arr2, isEven)) // [[], [1,4,5,7,6]]
console.log(span(arr3, isOdd)) // [[13,17,19,11,21],[]]