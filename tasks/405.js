function alphabetized(s) {
  return s
    .replace(/[^A-Za-z]|[_ ]/g, '')
    .split('')
    .sort((a, b) => a.toLowerCase().charCodeAt(0) - b.toLowerCase().charCodeAt(0))
    .join('')
}

console.log(alphabetized('The Holy Bible!#$%&()*+,-=@^_`')) // 'BbeehHilloTy'