const getSortedWord = str => {
  return str.split('').sort().join('')
}

function groupAnagrams(words){
  const anagramsObj = Object.create(null);

  for(const word of words) {
    const sorted = getSortedWord(word);
    anagramsObj[sorted] ??= []
    anagramsObj[sorted].push(word)
  }

  // return Object.keys(anagramsObj).map(key => anagramsObj[key])
  return Object.values(anagramsObj)
}
console.log(groupAnagrams(["tsar", "rat", "tar", "star", "tars", "cheese"]))

// [
//   ["tsar", "star", "tars"],
//   ["rat", "tar"],
//   ["cheese"]
// ]