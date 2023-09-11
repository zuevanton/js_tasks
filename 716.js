function isPathAvailable(x1, y1, x2, y2) {
  return Math.abs(x1 - x2) <= 1 && Math.abs(y1 - y2) <= 1
}

  const arr = [
    [-1, -1], [0, -1], [+1, -1],
    [-1, 0],             [+1, 0], 
    [-1, +1], [0, +1] ,[+1, +1],
  ]

function helper(board, word, x, y) {
  if(word.length === 0) {
    return true
  }
  if(x < 0 || y < 0 || x >= board[0].length || y >= board.length) {
    return false
  }
  if(board[y][x] !== word[0]) {
    return false
  }

  const tempBoard = board.map(x => [...x])
  tempBoard[y][x] = null;

  return arr.some(([dx, dy]) => helper(tempBoard, word.slice(1), x + dx, y + dy))

  // for(const [dx, dy] of arr) {
  //   if(helper(tempBoard, word.slice(1), x + dx, y + dy)){
  //     return true
  //   }
  // }
  // return false
}

function checkWord( board, word) {
  for(let i = 0; i < board.length; i++){
    for(let j = 0; j < board[i].length; j++) {
      if(helper(board, word, j, i)) {
        return true
      }
    }
  }
  return false
}

// console.log(isPathAvailable(1, 1, 0, 2))

const board = [
  ["E","A","R","A"],
  ["N","L","E","C"],
  ["I","A","I","S"],
  ["B","Y","O","R"]
];

// helper(board, 'BAILER', 0, 3) // true

console.log(checkWord(board, 'BAILER')) // true
// console.log(checkWord(board, 'BAILER')) // true