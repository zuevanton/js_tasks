const isAnagram2 = (test, original) => {
  const result = {};
  for(const letter of test.toLowerCase()) {
    result[letter] ??= 0;
    result[letter] += 1;
  }
  for(const letter of original.toLowerCase()) {
    result[letter] ??= 0;
    result[letter] -= 1;
  }

  return Object.keys(result).every(item => result[item] === 0); 
}


const getLettersCount = str => {
  const result = {};
  for(const letter of str.toLowerCase()) {
    result[letter] ??= 0;
    result[letter] += 1;
  }
  return result
}

const isAnagram = (test, original) => {
  if(test.length !== original.length) {
    return false
  }
  const testLetters = getLettersCount(test);
  const originalLetters = getLettersCount(original);

  console.log(Object.keys(testLetters));


  return Object.keys(testLetters).every(item => testLetters[item] === originalLetters[item]) 
}


console.log(isAnagram("foefet", "toffeea"))