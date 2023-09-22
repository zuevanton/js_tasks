const throttle = function(fn, time) {
  let start = 0;
  let timeOutId;

  return function(...args) {
    let invoked = Date.now();

    if(invoked - start > time) {
      start = invoked;
      fn(...args);
    } else {
      clearTimeout(timeOutId)
      timeOutId = setTimeout(() => fn(...args), invoked - start)
    }
  }
}

function fn(...args) {
  calls.push({
    args,
    time: Date.now() - start,
  });
}

const throttledFn = throttle(fn, 400);
const calls = [];
let start = Date.now();

setTimeout(() => throttledFn(1, "blue"),  0);     // 0
setTimeout(() => throttledFn(2, "pink"),  100);   // 
setTimeout(() => throttledFn(3, "green"), 200);   // 400 
setTimeout(() => throttledFn(4, "pink"),  700);   // 800
setTimeout(() => throttledFn(5, "pink"),  1000);  // 1200
setTimeout(() => throttledFn(6, "green"), 1900);  // 1900
setTimeout(() => throttledFn(7, "pink"),  2000);  //
setTimeout(() => throttledFn(8, "blue"),  2100);  //
setTimeout(() => throttledFn(9, "green"), 2200);  // 2300

setTimeout(() => console.table(calls), 3000);

// T ≈ 0     →  1 "blue"
// T ≈ 400   →  3 "green"
// T ≈ 800   →  4 "pink"
// T ≈ 1200  →  5 "pink"
// T ≈ 1900  →  6 "green"
// T ≈ 2300  →  9 "green"