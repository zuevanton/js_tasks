const persistence = num => {
  if(num < 10) {
    return 0
  }

  const next = num
    .toString()
    .split('')
    .reduce((acc, next) => acc * next, 1)
  
  return 1 + persistence(next)
}

console.log(persistence(39)) // 3
console.log(persistence(4)) // 0