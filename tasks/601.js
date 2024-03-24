Array.prototype.groupBy = function(fn = x => x) {
  const obj = {};

  for(const item of this) {
    const key = fn(item);
    obj[key] ??= []
    obj[key].push(item)
  }

  return obj
}

console.log([1,2,3,2,4,1,5,1,6].groupBy())
