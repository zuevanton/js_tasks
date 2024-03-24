// const firstLine = bookArr[0]
// const lines = bookArr.slice(1)

// const [firstLine, ...lines] = bookArr;


function balance(book) {
  const [firstLine, ...lines] = book
    .replace(/[^.a-z0-9 \r\n]/gi, '')
    .split('\n')
    .filter(line => line.length !== 0);

  const originalBalance = +firstLine;
  const result = [];
  let totalExpense = 0;

  for(const line of lines) {
      const [id, title, priceStr] = line.split(' ');
      const price = +priceStr;
      totalExpense += price;

      const currentBalance = originalBalance - totalExpense;

      result.push(`${id} ${title} ${price.toFixed(2)} Balance ${currentBalance.toFixed(2)}`);
  }

  const averageExpense = totalExpense / lines.length;

  result.unshift(`Original Balance: ${originalBalance.toFixed(2)}`)
  result.push(`Total expense  ${totalExpense.toFixed(2)}`)
  result.push(`Average expense  ${averageExpense.toFixed(2)}`)

  return result.join('\r\n')
}

const b2=`1233.00
125 Hardware;! 24.8?;


123 Flowers 93.5
127 Meat 120.90
120 Picture 34.00
124 Gasoline 11.00
123 Photos;! 71.4?;
122 Picture 93.5
132 Tyres;! 19.00,?;
129 Stamps 13.6
129 Fruits{} 17.6
129 Market;! 128.00?;
121 Gasoline;! 13.6?;`

console.log(balance(b2))

// `Original Balance: 1233.00\r
// 125 Hardware 24.80 Balance 1208.20\r
// 123 Flowers 93.50 Balance 1114.70\r
// 127 Meat 120.90 Balance 993.80\r
// 120 Picture 34.00 Balance 959.80\r
// 124 Gasoline 11.00 Balance 948.80\r
// 123 Photos 71.40 Balance 877.40\r
// 122 Picture 93.50 Balance 783.90\r
// 132 Tyres 19.00 Balance 764.90\r
// 129 Stamps 13.60 Balance 751.30\r
// 129 Fruits 17.60 Balance 733.70\r
// 129 Market 128.00 Balance 605.70\r
// 121 Gasoline 13.60 Balance 592.10\r
// Total expense  640.90\r
// Average expense  53.41`