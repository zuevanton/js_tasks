function findShort(s){
  let min = Infinity;
  for(const item of s.split(' ')) {
    min = Math.min(min, item.length);
  }
  s.split(' ').forEach(item => {
    // if (item.length < min) {
    //   min = item.length
    // }
    min = Math.min(min, item.length);
  })
  return min
}

function findShort(s){
  // 1. получить массив слов
  // 2. получить массив длин
  // 3. найти минимальную длину
  const words = s.split(' ');
  const wordsLength = words.map(item => item.length);
  return Math.min(...wordsLength)
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))