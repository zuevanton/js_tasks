function multiplyAll(arr) {
  return function(multiplier) {
    return arr.map(item => item * multiplier)
  }
}

const multiplyAll = arr => multiplier => arr.map(item => item * multiplier)