const countChange = (money, coins, arr = []) => {
  if(money < 0 || coins.length === 0) {
    return []
  }
  if(money === 0) {
    return [arr]
  }

  return [
    ...countChange(money, coins.slice(1), arr),
    ...countChange(money - coins[0], coins, [...arr, coins[0]]),
  ];
}
console.log(
  countChange(10, [5,2,3])
) // => 4 ([[5,5], [5,2,3], [2,3,2,3], [2,2,2,2,2]])

// countChange(4, [1,2]) // => 3 (1111, 22, 112)
// countChange(11, [5,7]) //  => 0