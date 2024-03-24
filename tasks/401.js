function dbSort(arr){
  return arr.sort((a, b) => {
    if(typeof a === 'number' && typeof b === 'number') {
      return a - b
    }
    if(typeof a === 'number' && typeof b === 'string') {
      return -1
    }
    if(typeof a === 'string' && typeof b === 'string') {
      return a.charCodeAt(0) - b.charCodeAt(0)
    }
  })
}

console.log(dbSort(["Banana", "Orange", "Apple", "Mango", 0, 2, 2])) // [0,2,2,"Apple","Banana","Mango","Orange"]