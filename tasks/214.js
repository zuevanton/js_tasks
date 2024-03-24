function isPrime(num) {
  if(num < 2) {
    return false
  }
  const root = Math.sqrt(num);
  for(let i = 2; i <= root; i++) {
    if(num % i == 0) {
      return false
    }
  }
  return true
}

console.log(isPrime(2 ** 31 - 1))