const scores = {
 nil: 0,
 one: 1,
 two: 2,
 three: 3,
 four: 4,
 five: 5,
 six: 6,
 seven: 7,
 eight: 8,
 nine: 9,
};

Object.setPrototypeOf(scores, null);

function scoreboard(string) {
  return string
    .split(' ')
    .filter(item => Object.hasOwn(scores, item))
    // .filter(item => scores.hasOwnProperty(item))
    // .filter(item => item in scores)
    .map(score => scores[score])
}


console.log(scoreboard('wow four nil is the constructor score')) // [4, 0]