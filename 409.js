function convertHashToArray(hash){
  return Object.keys(hash).sort().map(key => [key, hash[key]])
}

console.log(convertHashToArray({name: "Jeremy", age: 24})) // [["age", 24], ["name", "Jeremy"]]