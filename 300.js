function hexStringToRGB(hexString) {
  // const obj = /([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})/gi.exec(hexString)
  const [r, g, b] = hexString
    .slice(1)
    .match(/../g)
    .map(color => parseInt(color, 16));

  return {r, g, b}; 
}

console.log(hexStringToRGB("#FF9933")) // {r:255, g:153, b:51}