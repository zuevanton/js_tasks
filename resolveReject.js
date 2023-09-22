function resolve(value) {
  return new Promise(function(myResolve) {
    myResolve(value)
  })
}
function reject(reason) {
  return new Promise(function(resolve, myReject) {
    myReject(reason)
  })
}