const abbreviate = (str) => {
  return str.replace(/\w(\w{2,})\w/g, (match, value) => match.at(0) + value.length + match.at(-1))
}

const abbreviate2 = (str) => {
  return str.replace(/[a-z]{4,}/ig, match => match.at(0) + (match.length - 2) + match.at(-1))
}

console.log(abbreviate2("internationalization asdad")) // "i18n"
console.log(abbreviate2("elephant-ride")) // "e6t-r2e"