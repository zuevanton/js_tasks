function objConcat(arr){
  let result = {}
  for(const obj of arr) {
    result = {...result, ...obj} 
  }
  return result
}

var a={'1':'1','2':'2','3':'3'},
    b={'3':'4','5':'6','6':'7','7':'8'},
    c={'5':'9','8':'9','6':'12','23':'35'},
    o=[a,b,c];

console.log(objConcat(o)) // { '1': '1','2': '2','3': '4','5': '9','6': '12','7': '8','8': '9','23':'35' });