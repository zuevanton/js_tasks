function arrayDiff(a, b) {
  let arrNew = [];

  for(let i = 0; i < a.length; i++) {
    if(b.length === 0) return a;

    b.forEach(elemB => {
      if (a[i] !== elemB){
        arrNew.push(a[i]);
      }
    });
  }

  return arrNew;
}

console.log(arrayDiff([1, 2, 2], []))