function compose(fn1, fn2) {
  return x => {
    if(!arguments.length) return x
    if(arguments.length === 1) return fn1(x)
    return fn1.call(null, fn2.apply(null, [x, ...arguments]))
  }
}

const addOne = (a) => a + 1
const multTwo = (b) => b * 2

console.log(compose(multTwo, addOne)(5)) // 12
console.log(compose(addOne, multTwo, addOne, addOne)(2)) // 9
console.log(compose(addOne)(3)) // 4
console.log(compose()(10))// 10