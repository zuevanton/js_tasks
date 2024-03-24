const isObj = x => x != null && typeof x === 'object'

function deepCompare(o1, o2) {
  const isObjects = isObj(o1) && isObj(o2);
  if(!isObjects) {
    return o1 === o2
  }

  if(Object.keys(o1).length !== Object.keys(o2).length) {
    return false
  }
  return Object.keys(o1).every(x => deepCompare(o1[x], o2[x]))

  // for(const key in o1) {
  //   if(!deepCompare(o1[key], o2[key])) {
  //     return false
  //   }
  // }
  // return true
}
console.log(deepCompare({name: 'Joe', x: {b: {c: 1}}}, {name: 'Joe', x: {b: {c: 1}}}))
