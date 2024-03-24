function kebabize(str) {
  return str
    .replace(/[^a-zA-Z]/g, '')
    .replace(/^[A-Z]/, match => match.toLowerCase())
    .replace(/[A-Z]/g, match => '-' + match.toLowerCase())
}

console.log(kebabize('myCamelCase')) // 'my-camel-cased-string'