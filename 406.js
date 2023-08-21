const getMaxLengthOfVowels = str => {
  return Math.max(0, ...(str.match(/[aeiou]+/gi) ?? []).map(item => item.length))
}

const sortStringsByVowels = strings => {
  return strings.sort((a, b) => getMaxLengthOfVowels(b) - getMaxLengthOfVowels(a))
}


// console.log(getMaxLengthOfVowels("zxc"));


console.log(sortStringsByVowels(["qwsff","eee","oo","iiii"])) // ["iiii","eee","aa","oo"]
console.log(sortStringsByVowels(["aa","eee","oo","iiii"])) // ["iiii","eee","aa","oo"]