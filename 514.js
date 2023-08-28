const spyOn = fn => {
  let counter = 0;
  const calledWith = new Set();
  const returns = new Set();

  const outputFn = (...args) => {
    for(const arg of args) {
      calledWith.add(arg)
    }
    
    const result = fn(...args)
    counter += 1;

    returns.add(result)
    return result
  }

  outputFn.callCount = () => counter;
  
  outputFn.wasCalledWith = (val) => calledWith.has(val)

  outputFn.returned = (val) => returns.has(val)

  return outputFn
}

function adder(n1, n2) { return n1 + n2; }
const adderSpy = spyOn( adder );

console.log(adderSpy(2, 4))
console.dir(adderSpy.callCount())
console.dir(adderSpy.wasCalledWith(3))
console.dir(adderSpy.wasCalledWith(4))
console.dir(adderSpy.returned(7))