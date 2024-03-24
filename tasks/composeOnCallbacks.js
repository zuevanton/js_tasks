function makeCbFunction(fn) {
  return function(x, cb) {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        cb(null, fn(x));
      } else {
        cb(`error in ${fn.name}`);
      }
    }, 500);
  };
}

const cube = makeCbFunction(function cube(x) {
  return x ** 3
});
const double = makeCbFunction(function double(x) {
  return x * 2
});
const subtract5 = makeCbFunction(function subtract5(x) {
  return x - 5
});

// cube(2, (err, result) => {
//   console.log(err, result);
//   // null, 8 if there is no error
//   // "error in cube", undefined otherwise
// });

function compose(callbacks) {
  return function(value, fn) {
    let result = value;
    let index = 0;

    function run() {
      if(index === callbacks.length) {
        fn(null, result)
        return;
      }
      callbacks[index](result, (reason, val) => {
        if(reason !== null){
          fn(reason, undefined)
        } else {
          result = val;
          index++;
          run()
        }
      })
    }
    run()
  }
}

function compose(callbacks) {
  return function(value, cb) {
    if (callbacks.length === 0) {
      cb(value);
      return;
    }
    const lastCb = callbacks.at(-1);
    const firstCbs = callbacks.slice(0, -1);

    compose(firstCbs)(value, (err, result) => {
      if (err !== null) {
        cb(err);
      } else {
        lastCb(result, cb);
      }
    })
  }
}

const composed = compose([cube, double, subtract5]);

composed(2, (err, result) => {
  console.log(err, result); // 11 === 2³ × 2 - 5
});