function bingo(ticket, win){
  // 1. найти кол-во мини-побед в ticket
  let miniWins = 0;
  for(const [str, winCode] of ticket) {
    if(str.includes(String.fromCharCode(winCode))) {
      miniWins++;
    }
  }
  // 2. сравнить кол-во мини-побед и win
  // if(miniWins >= win){
  //   return 'Winner!'
  // } else {
  //   return 'Loser!'
  // }
  return miniWins >= win ? 'Winner!' : 'Loser!'
}

console.log( bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2) )
