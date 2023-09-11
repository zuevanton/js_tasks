function digitalRoot(n) {
  if(n < 10) {
    return n
  }
  const result = n
    .toString()
    .split("")
    .map(Number)
    .reduce((a, b) => a + b, 0);

  // let result = 0;
  // for(const x of str){
  //   result += +x;
  // }
  return digitalRoot(result)
}

console.log(digitalRoot(16)) // 7