const createMessage = (msg) => {
  let result = msg;
  const fn = (str) => {
    if(str === undefined) {
      return result
    }
    result += ' ' + str;
    return fn
  }
  return fn
}

console.log(createMessage("Hello")("World!")("how")("are")("you?")())