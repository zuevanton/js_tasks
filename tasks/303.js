function outed(meet, boss){
  const values = Object.values(meet)
  const personsCount = values.length;
  const happinessSum = values.reduce((acc, item) => acc + item, 0) + meet[boss]

  return happinessSum / personsCount <= 5 ? 'Get Out Now!' : 'Nice Work Champ!';
}

console.log(outed({'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0,
'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}, 'laura'))
// 'Get Out Now!' 