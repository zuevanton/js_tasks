function minPath(grid, x, y, cache = grid.map(() => [])) {
  
  if(y < 0 || x < 0) {
    return Infinity;
  }

  if (cache[y][x] !== undefined) {
    return cache[y][x];
  }

  if(x === 0 && y === 0) {
    return grid[0][0];
  }

  return cache[y][x] = grid[y][x] + 
    Math.min(minPath(grid, x - 1, y, cache), minPath(grid, x, y - 1, cache));
}
var square = [
  [1,2,3],
  [4,8,2],
  [1,5,3]
];

var cache = [
  [1,3,6],
  [5,11,8],
  [6,11,11],
];


function minPath2(grid, x, y) {
  const savedGrid = [];
  const side = grid.length;

  for (let i = 0; i < side; i++) {
    savedGrid[i] = new Array(side).fill(null);
  }

  savedGrid[0][0] = grid[0][0];

}



var square = [
  [1, 2, 3, 6, 2, 8, 1],
  [4, 8, 2, 4, 3, 1, 9],
  [1, 5, 3, 7, 9, 3, 1],
  [4, 9, 2, 1, 6, 9, 5],
  [7, 6, 8, 4, 7, 2, 6],
  [2, 1, 6, 2, 4, 8, 7],
  [8, 4, 3, 9, 2, 5, 8]];
  
console.log(minPath2(square, 4, 2)) // 5

