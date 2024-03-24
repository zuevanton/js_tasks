// функция ожидает колбек первым аргументом и остальные аргументы
const curryPartial = (fn, ...args) => {
  // проверяем, что передано столько аргументов, сколько колбек ожидает 
  if(args.length >= fn.length) {
    // если всё ок, то возвращаем вызов колбека на аргументы. 
    return fn(...args)
  }
  // иначе возвращаем колбек, в котором возвращаем вызов функции, куда передаем аргументы из соседних скобок
  return (...x) => curryPartial(fn, ...args, ...x)
}

curryPartial(add, 1, 2, 3)

curryPartial(add, 1)(2)      (3)
curryPartial(add, 1, 2)      (3)


function add(a, b, c) {
  return a + b + c;
}

console.log(curryPartial(add)(1, 2)(3))
// 