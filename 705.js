const persistence = num => {
  num = num.toString();
  if(num.length === 1) {
    return 0
  }
  
  let multiplyNum = 1;
  for(const item of num) {
    multiplyNum *= item;
  }
  
  return 1 + persistence(multiplyNum)
}

console.log(persistence(39)) // 3
console.log(persistence(4)) // 0