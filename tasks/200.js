function toHex(n) {
  if(n > 255) {
    n = 255;
  }
  if(n < 0) {
    n = 0;
  }

  // 00a
  // 03c
  // 9d5

  return n
    .toString(16)
    .toUpperCase()
    .padStart(2, '0');
}

function rgb(r, g, b){
  return [r, g, b].map(toHex).join("");
  // return toHex(r) + toHex(g) + toHex(b);
}