const solve = (target, str) => {
  if(target.length === 0) {
    return 1;
  }
  let res = 0;
  for(let i = 0; i < str.length; i++) {
    if(target[0] === str[i]) {
      res += solve(target.slice(1), str.slice(i + 1))
    }
  }
  return res
}

// "a" "abcag" === 2

console.log(solve("zaaz","zazaapulz")) // 4
console.log(solve("code","cozzdezodeczzode")) // 11