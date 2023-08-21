function incrementString (str) {
  return str.replace(/\d*$/, match => {
    const increment = +match + 1;
    return increment.toString().padStart(match.length, "0");
  })


}

console.log(incrementString("foobar000"))  // foobar001
console.log(incrementString("fo99obar99")) // fo99obar100
console.log(incrementString("fo99obar")) // fo99obar1