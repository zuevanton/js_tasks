const isObject = value => typeof value === "object" && value !== null && !Array.isArray(value);

function depth(obj) {
  console.log("obj", obj);
  if(!isObject(obj) || Object.keys(obj).length === 0) {
    return 0
  }

  return 1 + Math.max(...Object.values(obj).map(depth))
  // return 1 + Math.max(...keys.map(item => depth(obj[item])))
}

const o = {
  x: { // depth === 3
    y: {
      z: {
        y: 1,
      },
    },
    m: 4,
  },
  o: "qwe",  // depth === 0
  t: {  // depth === 1
    q: 1,
  }
}

console.log(depth({a: 1}))


// console.log(depth({}))
// console.log(depth({a: 1, b: {c: 2}}))
// console.log(depth({a: 1, b: {}}))
// console.log(depth([]))