function frequency(arr, options) {
  const obj = new Map();
  for(const item of arr) {
    let key;
    if(options?.hasOwnProperty('criteria')) {
      key = options.criteria(item)
    } else {
      key = item;
    }
    if(!obj.has(key)){
      obj.set(key, 0)
    }
    obj.set(key, obj.get(key) + 1)
  }
  if (options?.hasOwnProperty('compareTo')) {
    return Array.from(obj).sort((a, b) => options.compareTo(a[0], b[0]))
  }
  return Array.from(obj).sort((a, b) => a[0] < b[0] ? -1 : 1)
}



console.log(frequency([1, 10, 12, 2, 1, 10, 2, 2]));
console.log(frequency(['Peter', 'Anna', 'Rose', 'Peter', 'Peter', 'Anna']) ) 
// [["Anna", 2], ["Peter", 3], ["Rose", 1]]


function alphabeticalCompare(value1, value2) {
  if (String(value1) < String(value2)) {
    return -1;
  } else if (String(value1) > String(value2)) {
    return 1;
  } else {
    return 0;
  }
}
console.log(frequency([1, 10, 12, 2, 1, 10, 2, 2], {compareTo: alphabeticalCompare}))
// [[1, 2], [10, 2], [12, 1], [2, 3]]


function isEven(number) {
  return number % 2 === 0;
}

function parity(number) {
  return isEven(number) ? 'even' : 'odd';
}

console.log(frequency([1, 2, 3, 8, 5, 6, 7], {criteria: parity}))

//[["even", 3], ["odd", 4]]