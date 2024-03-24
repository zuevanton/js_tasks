function findUnique(numbers) {
  // numbers.sort()
  // for(let i = 0; i < numbers.length; i++) {
  //   if(numbers[i] !== numbers[i + 1] && numbers[i] !== numbers[i - 1]){
  //     return numbers[i]
  //   }
  // }

  const numsCount = {}
  
  for(const num of numbers) {
    numsCount[num] ??= 0;
    numsCount[num] += 1;
  }

  for(const num in numsCount) {
    if(numsCount[num] === 1) {
      return +num
    }
  }
}

console.log(findUnique([1, 8, 4, 4, 6, 1, 8])) // 6