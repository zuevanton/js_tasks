const multiFilter = function(...predicates){
	return function(arg){
    return predicates.every(predicate => predicate(arg))
  }
}

var isOdd = function(el) {
  return el % 2 === 1;
};

var isEven = function(el) {
  return el % 2 === 0;
};

const testArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

console.log(testArray.filter(multiFilter(isEven))) 