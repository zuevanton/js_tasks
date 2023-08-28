// написать функцию generator, которая будет принимать функцию из которой нужно будет сделать генератор
// generator должен вернуть объект с методом next

function generator(sequencer, ...args) {
  // sequencer - функция, возвращающая другую функцию
  // args - необязательный список аргументов, которые нужно пробросить в функию из sequencer

  return {
    // next: function() {
    //  return sequencer.apply(this, args)
    // }
    // next: sequencer.apply(this, args)
    next: sequencer(...args)
  }
}

function dummySeq() {
  return function () {
    return "dummy";
  };
}

function factorialSeq() {
  let prev = 0;
  let current = 1;
  return function () {
    // первый случай с 0
    if (prev === 0) {
      prev += 1
      return current
    }
    const temp = prev;
    prev += 1;
    current *= temp
    return current
  }
}

function factorialSeq() {
  let number = 0;
  let factorial = 1;
  return function () {
    const result = factorial;

    number += 1;
    factorial *= number;

    return result
  }
}
const seq2 = generator(factorialSeq)
// console.log(seq2.next()) // 1
// console.log(seq2.next()) // 1
// console.log(seq2.next()) // 2
// console.log(seq2.next()) // 6

function fibonacciSeq() {
  let prev = 1;
  let current = 1;
  return function () {
    const result = prev;
    // let temp = prev
    // prev = current
    // current = temp + current
    [prev, current] = [current, prev + current];
    return result;
  }
}

function rangeSeq(start, step) {
  let current = start;
  return function () {
    const temp = current;
    current += step;
    return temp
  }
}

function isPrime(num) {
  if (num < 2) {
    return false
  }
  const root = Math.sqrt(num);
  for (let i = 2; i <= root; i++) {
    if (num % i == 0) {
      return false
    }
  }
  return true
}

function primeSeq() {
  let start = 1;
  return function () {
    while (true) {
      start += 1;
      if (isPrime(start)) {
        return start
      }
    }
  }
}

function primeSeq() {
  let current = 2;
  return function () {
    const result = current;

    while (true) {
      current += 1;
      if (isPrime(current)) {
        break;
      }
    }

    // current += 1;
    // while(!isPrime(current)) {
    //   current += 1;
    // }

    // do {
    //   current += 1;
    // } while(!isPrime(current));

    return result;
  }
}
function partialSumSeq(...nums) {
  let start = 0;
  let i = 0;
  return function () {
    if (i === nums.length) {
      throw new Error()
    }
    const increment = nums[i];
    i++;
    start += increment
    return start
  }
}

function partialSumSeq(...nums) {
  let current = 0;
  let i = 0;

  function inner() {
    if (i === nums.length + 1) {
      throw new Error()
    }
    const result = current;

    current += nums[i]
    i++;

    return result
  }

  inner();

  return inner;
}



const seq3 = generator(fibonacciSeq)
// console.log(seq3.next()) // 1
// console.log(seq3.next()) // 1
// console.log(seq3.next()) // 2
// console.log(seq3.next()) // 3
// console.log(seq3.next()) // 5
// console.log(seq3.next()) // 8

const seq4 = generator(rangeSeq, 5, 3);
// console.log(seq4.next()) // 5
// console.log(seq4.next()) // 8
// console.log(seq4.next()) // 11
// console.log(seq4.next()) // 14

const seq5 = generator(primeSeq);
// console.log(seq5.next())
// console.log(seq5.next())
// console.log(seq5.next())
// console.log(seq5.next())
// console.log(seq5.next())
// console.log(seq5.next())

const seq6 = generator(partialSumSeq, 1, 3, 7, 2, 0);
// console.log(seq6.next()) // 0
console.log(seq6.next()) // 1
console.log(seq6.next()) // 4
console.log(seq6.next()) // 11
console.log(seq6.next()) // 13
console.log(seq6.next()) // 13
try {
  console.log(seq6.next())
} catch (e) {
  console.log("error");
}