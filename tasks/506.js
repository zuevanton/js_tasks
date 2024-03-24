function dropWhile(arr, pred) {
  const right = []
  let flag = false;
  for(const item of arr) {
    if(!pred(item)){
      flag = true;
    }
    if(flag){
      right.push(item)
    }
  }
  return right
}

console.log(dropWhile([], isEven)) // []