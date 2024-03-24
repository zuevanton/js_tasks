const addTimeout = (fn, ms = 500) => {
  return () => {
    setTimeout(() => {
      fn();
    }, ms);
    // }, 100 * Math.random());
  };
};

const addRandomError = (fn, result) => {
  return () => {
    const isError = Math.random() <= -0.2;

    if (isError) {
      fn(new Error('Something went wrong'), null);
    } else {
      fn(null, result);
    }
  }
}

const getModifiedCallback = (fn, result, ms) => {
  return addTimeout(addRandomError(fn, result), ms);
}

class Entity {
  constructor(name, isActive) {
    this.getName = (callback) => {
      getModifiedCallback(callback, name)();
    };

    this.checkIsActive = (callback) => {
      getModifiedCallback(callback, isActive, 200)();
    };
  }
}

class Category extends Entity {
  constructor(name, status, children) {
    super(name, status);

    this.getChildren = (callback) => {
      getModifiedCallback(callback, children)();
    };
  }
}

class Product extends Entity {
  constructor(name, status, price) {
    super(name, status);

    this.getPrice = (callback) => {
      getModifiedCallback(callback, price)();
    };
  }
}

const input = {
  minPrice: 300,
  maxPrice: 1500,
  catalog: new Category("Catalog", true, [
    new Category("Electronics", true, [
      new Category("Smartphones", true, [
        new Product("Smartphone 1", true, 1000),
        new Product("Smartphone 2", true, 900),
        new Product("Smartphone 3", false, 900),
        new Product("Smartphone 4", true, 900),
        new Product("Smartphone 5", true, 900)
      ]),
      new Category("Laptops", true, [
        new Product("Laptop 1", false, 1200),
        new Product("Laptop 2", true, 900),
        new Product("Laptop 3", true, 1500),
        new Product("Laptop 4", true, 1600)
      ]),
    ]),
    new Category("Books", true, [
      new Category("Fiction", false, [
        new Product("Fiction book 1", true, 350),
        new Product("Fiction book 2", false, 400)
      ]),
      new Category("Non-Fiction", true, [
        new Product("Non-Fiction book 1", true, 250),
        new Product("Non-Fiction book 2", true, 300),
        new Product("Non-Fiction book 3", true, 400)
      ]),
      new Product("Book", true, 40_000)
    ]),
  ])
}

const answer = [
  { name: "Non-Fiction book 2", price: 300 },
  { name: "Non-Fiction book 3", price: 400 },
  { name: "Laptop 2", price: 900 },
  { name: "Smartphone 2", price: 900 },
  { name: "Smartphone 4", price: 900 },
  { name: "Smartphone 5", price: 900 },
  { name: "Smartphone 1", price: 1000 },
  { name: "Laptop 3", price: 1500 }
];

const promisify = (fn) => {
  return function () {
    return new Promise((resolve, reject) => {
      fn((error, result) => {
        if (error !== null) {
          reject(error)
        } else {
          resolve(result)
        }
      })
    })
  }
}

const retry = fn => {
  return async function () {
    while (true) {
      try {
        return await fn()
      } catch (e) { }
    }
  }
}


// const retry = fn => {
//   function inner(...args) {
//     return fn(...args).catch(() => inner(...args));
//   }
// }

const promisifyWithRetry = fn => {
  return retry(promisify(fn))
}

async function solution({ minPrice, maxPrice, catalog }) {
  async function run(root) {
    const getStatus = () => promisifyWithRetry(root.checkIsActive.bind(root))()
      .then(active => {
        if (!active) {
          throw new Error();
        }
      })

    if (root instanceof Category) {
      const getChildren = promisifyWithRetry(root.getChildren.bind(root))

      try {
        const [children] = await Promise.all([getChildren(), getStatus()])
        return (await Promise.all(children.map(run))).flat();
      } catch {
        return [];
      }

    } else {
      const getPrice = () => promisifyWithRetry(root.getPrice.bind(root))()
        .then(price => {
          if (price < minPrice || price > maxPrice) {
            throw new Error();
          }
          return price;
        });
      const getName = promisifyWithRetry(root.getName.bind(root))

      try {
        const [name, price] = await Promise.all([getName(), getPrice(), getStatus()])
        return [{ name, price }]
      } catch {
        return []
      }
    }

  }

  const result = await run(catalog)
  return result.sort((a, b) => a.price - b.price || a.name.localeCompare(b.name));
}

console.time("solution")
solution(input).then(result => {
  const isAnswerCorrect = JSON.stringify(answer) === JSON.stringify(result);
  console.log(result)
  console.log(answer)
  console.timeEnd("solution")
  if (isAnswerCorrect) {
    console.log('OK');
  } else {
    console.log('WRONG');
  }
});