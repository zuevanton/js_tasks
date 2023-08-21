function formatWords(words){
  // if(!words) return ''
  // return words
  //   .filter(word => word)
  //   .map((word, i, arr) => {
  //     if(arr.length - 2 > i) {
  //       word = word + ',';
  //     }
  //     if(i === arr.length - 2){
  //       word = word + ' and'
  //     }
  //     return word
  //   })
  //   .join(' ')

  if(words === null) {
    return '';
  }
  const filteredWords = words
    .filter(word => word !== null && word !== '');

  if(filteredWords.length === 0) {
    return ''
  }
  if(filteredWords.length === 1) {
    return filteredWords[0]
  }

  const leftWords = filteredWords.slice(0, -1);
  
  return leftWords.join(', ') + ' and ' + filteredWords.at(-1);
  
  // 1. Разобрать случай words === null
  // 2. Отфильтровать плохие элементы
  // 3. Разобрать случай пустого массива
  // 4. Разобрать случай одного слова
  // 5. Получить все слова без последнего
  // 6. Соединить эти слова через запятую
  // 7. Присоединить к ним последнее слово через and
}

// 'one, two, three and four'

console.log(formatWords(['one', 'two', 'three', 'four', null, '']))