function mygcd(x, y){
  if(x === 0) {
    return y
  } 
  return mygcd(y, x % y)
}

console.log(mygcd(12, 30)) // 6
console.log(mygcd(36, 12)) // 12
console.log(mygcd(8, 9)) // 1