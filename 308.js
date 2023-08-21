function pluck(objs, name) {
  return objs.map(obj => obj[name])
}

console.log(pluck([{a:1}, {a:2, b: 1}], 'b')) // [1, 2]