function compose(...fns) {
  return x => {
    return fns.reduceRight((acc, fn) => fn(acc), x)
  }
}

const addOne = (a) => a + 1
const multTwo = (b) => b * 2

console.log(compose(multTwo, addOne)(5)) // 12
console.log(compose(addOne, multTwo, addOne, addOne)(2)) // 9
console.log(compose(addOne)(3)) // 4
console.log(compose()(10))// 10