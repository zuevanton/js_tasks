Array.prototype.square = function () {
  const result = [];
  for (const item of this) {
    result.push(item*item)
  }
  return result
}

Array.prototype.cube = function () {
  const result = [];
  for (const item of this) {
    result.push(item ** 3)
  }
  return result
}

Array.prototype.average = function () {
  return this.sum() / this.length
}


Array.prototype.sum = function () {
  let sum = 0;
  for (const item of this) {
    sum += item
  }
  return sum
}

Array.prototype.even = function () {
  const result = [];
  for (const item of this) {
    if(item % 2 === 0) {
      result.push(item)
    }
  }
  return result
}

Array.prototype.odd = function () {
  const result = [];
  for (const item of this) {
    if(item % 2 === 1) {
      result.push(item)
    }
  }
  return result
}

const numbers = [1, 2, 3, 4, 5];

console.log(numbers.square()) // [1, 4, 9, 16, 25]
console.log(numbers.cube())   // must return [1, 8, 27, 64, 125]
console.log(numbers.average()) // must return 3
console.log(numbers.sum())     // must return 15
console.log(numbers.even())    // must return [2, 4]
console.log(numbers.odd())     // must return [1, 3, 5]