function expandedForm(num) {
  // 1. Перевести число в строку
  // 2. получить массив разрядов числа
  // 3. добавить нули в соответствии с разрядом
  // 3. склеить разряды в строку, игнорируя если начинается с 0

  return num
    .toString()
    .split('')
    .map((item, i, arr) => item * 10 ** (arr.length - 1 - i))
    .filter(item => item !== 0)
    .join(' + ')
}

// console.log(expandedForm(1032)) 
console.log(expandedForm(70304)) // '70000 + 300 + 4'