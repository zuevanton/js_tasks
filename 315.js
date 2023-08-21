const findPair = (arr1, arr2) => {
  const pairsValue = {}
  for(let i = 0; i < arr1.length; i++) {
    const sum = arr1[i] + arr2[i];
    pairsValue[sum] ??= [];
    pairsValue[sum].push([arr1[i], arr2[i]]); 
  }

  // const pairs = arr1.map((_, i) => [arr1[i], arr2[i]]);
  // const pairsValue = Object.groupBy(pairs, pair => pair[0] + pair[1])

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/groupBy

  const result = Object.entries(pairsValue)
    .filter(([_, value]) => value.length !== 1);

  if (result.length === 0) {
    return [];
  }

  return result
    .sort(([keyA, valueA], [keyB, valueB]) => valueA.length - valueB.length || keyA - keyB)
    .pop()[1];
}

console.log(findPair([1,2,3,4,5],[0,0,0,0,0])) // should return []

console.log(findPair([1,2,3,4,5],[5,4,3,2,1])) // should return [[1,5],[2,4],[3,3],[4,2],[5,1]]

console.log(findPair([1,2,3,0,5,-2],[-1,2,-3,4,-5,6])) // should return [[2,2],[0,4],[-2,6]]