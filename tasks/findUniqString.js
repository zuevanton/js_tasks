function helper(str) {
  return [...new Set(str.trim().toLowerCase().split('').sort())].toString()
}

function findUniq(arr) {
  const newArr = arr.map(helper)
  const valuesCount = newArr.reduce((acc, next) => {
    acc[next] ??= 0;
    acc[next] += 1;
    return acc
  }, {})

  const uniqValue = Object.keys(valuesCount).find(key => valuesCount[key] === 1)
  
  return arr[newArr.indexOf(uniqValue)]
}

console.log(findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]))// 'BbBb'