const makeLooper = str => {
  let counter = 0;
  return function () {
    const letter = str[counter]
    counter++
    if(counter === str.length) {
      counter = 0;
    }
    return letter
  }
}

const abc = makeLooper('abc');
console.log(abc())
console.log(abc())
console.log(abc())
console.log(abc())