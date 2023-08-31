function depth(obj) {
  if(Array.isArray(obj)) {
    return 0
  }
  
  let keys = Object.keys(obj);
  console.log(keys)

  return keys.length !== 0 ? 1 + Math.max(...keys.map(item => depth(obj[item]))) : 0
}

console.log(depth({a: 1}))
console.log(depth({}))
console.log(depth({a: 1, b: {c: 2}}))
console.log(depth({a: 1, b: {}}))
console.log(depth([]))