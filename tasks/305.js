function duplicateEncode(word){
  word = word.toLowerCase();
  const arr = word.split('');
  return arr
    .map((item, i) => {
      // const newArr = [...arr];
      // newArr.splice(i, 1);
      return arr.toSpliced(i, 1).includes(item) ? ')' : '('
    })
    .join('')
}

console.log(duplicateEncode("recede"))
// function duplicateEncode(word) {
//   word = word.toLowerCase();
//   return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
// }