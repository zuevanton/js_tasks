function findShort(s){
  let min = null;
  s.split(' ').forEach(item => {
    if(!min) min = item.length;
    item.length < min ? min = item.length : min;
  })
  return min
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))