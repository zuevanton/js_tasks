const smartSum = (...args) => {
  return args.reduce((sum, item) => {
    if(typeof item === 'object') {
      return sum += smartSum(...item)
    }
    return +item + sum
  }, 0)
}

console.log(smartSum(1,2,3,[4,5],6)); // returns 21
console.log(smartSum(1,2,[[3,4],5],6)); // returns 21)