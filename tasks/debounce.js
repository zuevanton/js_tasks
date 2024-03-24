function debounce(fn, time) {
  // let prevInvoke = Date.now(); // 400
  let timeOutId;

  return function(...args) {
    clearTimeout(timeOutId)
    // let curInvoke = Date.now(); // 1800
    // if(curInvoke - prevInvoke > time) {
    //   console.log("???", args);
    //   fn(...args);
    //   prevInvoke = curInvoke;
    // } else {
      timeOutId = setTimeout(() => fn(...args), time);
    //   prevInvoke = curInvoke + time; // 1700
    // }
  }
}

function fn(...args) {
  calls.push({
    args,
    time: Date.now() - start,
  });
}

const debouncedFn = debounce(fn, 400);
const calls = [];
let start = Date.now();

setTimeout(() => debouncedFn(1, "blue"),  0);
// setTimeout(() => debouncedFn(1, "qwerty"),  1000);
// setTimeout(() => debouncedFn(1, "qwerty2"),  1200);
setTimeout(() => debouncedFn(2, "green"), 100);  // 500
setTimeout(() => debouncedFn(3, "pink"),  700);
setTimeout(() => debouncedFn(4, "pink"),  1000);
setTimeout(() => debouncedFn(5, "pink"),  1300); // 1700
setTimeout(() => debouncedFn(6, "blue"),  1800);
setTimeout(() => debouncedFn(7, "green"), 1900);
setTimeout(() => debouncedFn(8, "blue"),  2100); // 2500

setTimeout(() => console.table(calls), 3000);

// T = 500   →  2 "green"
// T = 1700  →  5 "pink"
// T = 2500  →  8 "blue"