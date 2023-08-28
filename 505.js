function span(arr, predicate) {
  // const left = []
  // const right = []
  // let current = left

  // for(const item of arr) {
  //   if(!predicate(item)){
  //     current = right
  //   }
  //   current.push(item)
  // }
  // return [left, right]
  const index = arr.findIndex(item => !predicate(item))
  if(index === -1) {
    return [arr, []]
  }
  return [arr.slice(0, index), arr.slice(index)]
}

function isEven (x) {
  return Math.abs(x) % 2 === 0;
}

var arr = [2,4,6,1,8,10];

console.log(span(arr, isEven))
// [[2,4,6],[1,8,10]]