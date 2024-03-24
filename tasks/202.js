const isNullOrEmpty = item => item === null || item.length === 0

function getLengthOfMissingArray(arrayOfArrays) {
  if(isNullOrEmpty(arrayOfArrays) || arrOfLength.some(isNullOrEmpty)) {
    return 0
  }

  const arrOfLength = arrayOfArrays
    .map(item => item.length)
    .sort((a, b) => a - b)

  for (let i = 0; i < arrOfLength.length; i++) {
    if(arrOfLength[i] + 1 !== arrOfLength[i + 1]){
      return arrOfLength[i] + 1
    }
  }
}

// null
// []
// [[1], null, [2,3]]
// [[1], [], [2,3]]

console.log(getLengthOfMissingArray([ [2, 2, 4, 2, 1, 2, 0, 1, 0, 2, 2],
  
  [0, 1, 0],
  [2, 0, 0, 2],
  [3, 3, 3, 4, 4, 2],
  [1, 2, 1, 4, 3, 4, 1, 1, 0, 0],
  [1, 2, 2, 3, 0],
  [4, 1, 3, 4, 1, 1, 2, 2],
  [3, 1, 3, 2, 0, 4, 2, 0, 4]] )) 
// console.log(getLengthOfMissingArray(null)) 


