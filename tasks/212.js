const operators = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "/": (a, b) => a / b,
  "*": (a, b) => a * b,
};

function calculate(expression) {
  const arr = expression.split(' ');
  // что лучше - развернуть массив методом reverse сразу или пройтись потом в цикле с конца?

  const stack = []
  
  // for(let i = arr.length - 1; i > -1; i--) {
    // const item = arr[i]
  for(const item of arr.reverse()) {
    // if(!operators.hasOwnProperty(item)) {
    // if(!Object.hasOwn(operators, item)) {
    if(!(item in operators)) {
      stack.push(+item);
      continue;
    }
    
    const num1 = stack.pop();
    const num2 = stack.pop();
    
    stack.push(operators[item](num1, num2));
  }
  return stack[0]
}

console.log(calculate('+ 3 5')) // 2
console.log(calculate('5')) // 5
console.log(calculate('0')) // 0

// решение с кодварс через operations
// понравилось тем, что легко читается 

// function calculate ( expression ) {
//   const stack = [];
//   const operations = {
//       '+': () => (stack.push(stack.pop() + stack.pop())),
//       '-': () => (stack.push(stack.pop() - stack.pop())),
//       '*': () => (stack.push(stack.pop() * stack.pop())),
//       '/': () => (stack.push(stack.pop() / stack.pop()))
//   };
  
//   for ( let token of expression.split(' ').reverse() )
//       operations[token] ? operations[token]() : stack.push(+token);
  
//   return stack[0];
// }