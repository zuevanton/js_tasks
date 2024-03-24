const isValidOctet = (str) => {
  if(!/^\d+$/.test(str)){
    return false
  }
  if(str[0] === '0' && str !== '0') {
    return false
  }
  return +str >= 0 && +str <= 255;
}

// console.log(isValidOctet("q23wsd54"))
// console.log(isValidOctet("23wsd54"))
// console.log(isValidOctet("2"))
// console.log(isValidOctet("27"))
// console.log(isValidOctet("278"))
// console.log(isValidOctet("0"))
// console.log(isValidOctet("01"))

function isValidIP(str) {
  const octets = str.split('.')
  return octets.length === 4 && octets.every(isValidOctet)
}
// return /^((\d|[1-9]\d|1[0-9]{2}|2[0-4]\d|25[0-5])\.){4}$/.test(str + '.')


console.log(isValidIP("0.0.0.0")) // true
console.log(isValidIP("1.2.3.4.5" )) // false
console.log(isValidIP('')) // false
console.log(isValidIP('23.123.12.1')) // true