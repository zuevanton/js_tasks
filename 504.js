function chain(input, fs) {
  // let res = input;
  // for(const fn of fs) {
  //   res = fn(res)
  // }
  // return res
  return fs.reduce((acc, fn) => fn(acc), input)
}

function add(num) {
  return num + 1;
}

function mult(num) {
  return num * 30;
}

console.log(chain(2, [add, mult]))
// returns 90;