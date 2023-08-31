function digitalRoot(n) {
  n = n.toString();
  if(n.length === 1) {
    return +n
  }

  let result = 0;
  for(const x of n){
    result += +x;
  }
  return digitalRoot(result)
}

console.log(digitalRoot(16)) // 7