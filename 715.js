function combos(target, currentSum = 0, start = 1, result = [], combination = []){
  if(currentSum === target) {
    result.push([...combination])
    return
  }

  for(let i = start; i <= target; i++) {
    const newSum = currentSum + i;

    if(newSum > target) break

    combination.push(i)
    combos(target, newSum, i, result, combination)
    combination.pop()
  }
  return result
}

// bactracking
// https://leetcode.com/problems/n-queens/
// https://leetcode.com/problems/sudoku-solver/


console.log(combos(3)) // [ [ 3 ], [ 1, 1, 1 ], [ 1, 2 ] ]

