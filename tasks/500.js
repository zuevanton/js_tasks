function detectInt(...fns) {
  if(fns.length === 0) {
    return 1
  }

  for(let i = 1; ; i++) {
    if(fns.every(fn => fn(i))){
      return i
    }
  }
}

lam1 = x => x > 9
lam2 = x => x**0.5 % 1 == 0

console.log(detectInt())             // => 1
console.log(detectInt(lam1))         // => 10
console.log(detectInt(lam2))         // => 1
console.log(detectInt(lam1,lam2))    // => 16