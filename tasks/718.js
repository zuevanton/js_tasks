// function flatten(...args) {
//   return args.flat(Infinity)
// }

function flatten(...args) {  
  let res = []
  for(const item of args){
    if(Array.isArray(item)) {
      res.push(...flatten(...item))
    } else {
      res.push(item)
    }
  }
  return res
}

console.log(flatten('a', ['b', 2], 3, null, [[4], ['c']])) // returns ['a', 'b', 2, 3, null, 4, 'c']