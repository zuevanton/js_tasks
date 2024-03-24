const getCountBits = num => {
  return num
    .toString(2)
    .split('')
    .filter(item => item !== '0')
    .length
}
function sortByBit(arr) {
  return arr.sort((a, b) => getCountBits(a) - getCountBits(b) || a - b)
}

let a = [3, 8, 3, 6, 5, 7, 9, 1];
console.log(sortByBit(a)) // [1, 8, 3, 3, 5, 6, 9, 7]
