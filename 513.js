const once = fn => {
  let isInvoked = false;
  return function(...args) {
    if(!isInvoked) {
      isInvoked = true;
      return fn(...args)
    }
  }
}

const logOnce = once(console.log)
logOnce('foo')
logOnce('bar')