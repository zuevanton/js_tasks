const smartSum = (...args) => {
  return args.reduce((sum, item) => {
    if (Array.isArray(item)) {
      return sum + smartSum(...item)
    }
    return item + sum
  }, 0)

  // let sum = 0;
  // for (const item of args) {
  //   sum += Array.isArray(item) ? smartSum(...item) : item;
  // }
  // return sum;
}

console.log(smartSum(1, 2, 3, [4, 5], 6)); // returns 21
console.log(smartSum(1, 2, [[3, 4], 5], 6)); // returns 21)