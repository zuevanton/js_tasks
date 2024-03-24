const Folder = require("./folder");

const root = Folder([
  "1.js",
  "2.js",
  Folder([
    Folder([
      "3.txt",
    ]),
    "4.js",
  ]),
  Folder([
    "5.png",
    Folder([
    ]),
    "6.js",
    Folder([
      "7.txt",
    ]),
  ]),
  "8.html",
]);

// root.size((s) => {
//   console.log(s); // 5
// });

// root.read(4, (x) => {
//   console.log(x); // "8.html"
// });

function traverse(root, cb) {
  // console.log(root)
  const arr = [];
  root.size(s => {
    if(s === 0) {
      cb([])
      return;
    }
    
    let counter = 0;
    for(let i = 0; i < s; i++) {
      root.read(i, name => {
        if(typeof name === 'string') {
          // if(name.split('.').at(-1) === 'js'){
          if(name.endsWith(".js")){
            arr.push(name);
          }
          counter++;
          if(s === counter) {
            cb(arr);
          }
        } else {
          traverse(name, items => {
            arr.push(...items)
            counter++;
            if(s === counter) {
              cb(arr);
            }
          })
        }
        
      })
    }
  })
}

const promisify = function(fn, toBind) {
  
  return function(...args) {
    return new Promise(resolve => {
      // fn(...args, result => {
      //   resolve(result)
      // })
      fn.call(toBind, ...args, result => {
        resolve(result)
      }) 
    })
  }
} 

function traverse2(root) {
  const psize = promisify(root.size, root);
  const pread = promisify(root.read, root);
  
  return psize().then(size => {
    const promises = [];
    for(let i = 0; i < size; i++) {
      promises.push(pread(i).then(file => {
        if(typeof file === 'string'){
          return file
        } else {
          return traverse2(file)
        }
      }))
    }
    return Promise.all(promises).then(result => result.flat(1))
  })
  
  // pread(0).then((file) => {
  //   // ...
  // })

}

// traverse(root, arr => {
//   console.log(arr); // ["1.js", "2.js", "4.js", "6.js"]
// })
traverse2(root).then(arr => {
  console.log(arr); // ["1.js", "2.js", "4.js", "6.js"]
})
