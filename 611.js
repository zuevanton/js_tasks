// Array.prototype.reduce = function(process, initial) {
//   let i = 0;
//   if(initial === undefined) {
//     if (this.length === 0) {
//       throw new Error();
//     }
//     i = 1;
//     initial = this[0]
//   }
//   for(; i < this.length; i++) {
//     initial = process(initial, this[i], i, this)
//   }
//   return initial
// }

// console.log(['a','y','!'].reduce(function(x,y){return x+y}, 'y')) // yay!

// console.log(
//   Array.prototype.reduce.call("abc", (a, b) => a + b.charCodeAt(0), 0),
// )

// console.log(
//   Array.prototype.every.call("1234", (a) => a >= "0" && a <= "9"),
// )

function x (b, c) {
  return this.a + b + c
}

const obj = {
  a: 5,
  fn: () => {},
}


Function.prototype.call2 = function(thisArg, ...args) {
  const fn = Symbol();
  thisArg[fn] = this;
  const result = thisArg[fn](...args)
  delete thisArg[fn]
  return result
}

// console.log(x.call2(obj, 10, 200))

// console.log(obj);

Function.prototype.bind2 = function(obj, ...params) {
  const that = this;
  return function(...args) {
    return that.call2(obj, ...params, ...args)
    // const fn = Symbol();
    // obj[fn] = that;
    // const res = obj[fn](...params, ...args)
    // delete obj[fn]
    // return res
  }
}

const foo = x.bind2(obj, 50);
console.log(obj);
console.log(foo(300)); // 355




const objX = {
  f() {
    const objA = {
      g() {
        const objM = {
          q: () => {
            const t = () => {
              console.log(this);
            }
            const objT = {
              y() {
                t();
              }
            }
            objT.y();
          }
        };
        const fn = function() {
          objM.q();
        }
        fn.call(objM);
      }
    }
    objA.g();
  }
}

objX.f()
