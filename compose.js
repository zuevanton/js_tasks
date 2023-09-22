const compose1 = fns => {
  return arg => {
    return fns.reduce(async (acc, item) => {
      return item(await acc)
    }, arg)
  }
}
const compose3 = fns => {
  return async arg => {
    let acc = arg;
    for(const fn of fns) {
      acc = await fn(acc);
    }
    return acc;
  }
}

const compose2 = fns => {
  return arg => {
    let p = Promise.resolve(arg);

    for(const fn of fns) {
      p = p.then(x => fn(x))
    }
    
    return p;

    // return fns.reduce((acc, item) => {
    //   return acc.then(item);
    // }, Promise.resolve(arg));
  }
}

const makePromise = (val, ms) => new Promise(r => setTimeout(r, ms, val));

const multiplyBy3 = x => makePromise(x * 3, 500);
const divideBy5 = x => makePromise(x / 5, 1500);
const square = x => makePromise(x ** 2, 2000);

const compute = compose1([multiplyBy3, divideBy5, square]);

compute(10).then(x => {
  console.log(x); // 36
});