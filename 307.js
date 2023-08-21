const operators = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
}
function arithmetic(a, b, operator){
  return operators[operator](a, b);
}

console.log(arithmetic(8, 2, 'subtract'))