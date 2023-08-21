function filterHomogenous(arrays) {
  return arrays.filter((subArr) => {
    const mySet = new Set();
    for(const item of subArr) {
      mySet.add(typeof item)
    }
    return mySet.size === 1;
  })
}
// [1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]
console.log(filterHomogenous([[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]])) // [[1, 5, 4], ['b']]