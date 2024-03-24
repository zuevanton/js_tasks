const format = function (str, obj) {

  let value = '';
  let isValue = false;
  let result = ''

  for(let i = 0; i < str.length; i++) {
    if(str[i] === '{') {
      isValue = true
      continue
    }
    if(str[i] === '}') {
      isValue = false;
      result += obj.hasOwnProperty(value) ? obj[value] : '{' + value + '}';
      value = '';
      continue
    }

    if(!isValue) {
      result += str[i]
    }
    if(isValue) {
      value += str[i]
    }

  }
  return result


  // let result = str;
  // for(const value in obj) {
  //   result = result.replace(`{${value}}`, obj[value])
  // }
  // return result

};

const format2 = function (str, obj) {
  return str.replace(/{(.+?)}/g, match => {
    const value = match.slice(1, -1);
    return obj.hasOwnProperty(value) ? obj[value] : match;
  });

  return str.replace(/{(.+?)}/g, (match, value) => {
    return obj.hasOwnProperty(value) ? obj[value] : match;
  });
}


const obj =  { bar : 'sandwich {foo}', foo : 'Jack' };

console.log(format2('Hello {foo} - {foobar} make me a {bar}... {foo}!!?', obj)) // Hello Jack - make me a sandwich