async function double(x) {
  return x + x;
}

async function cube(x) {
  if (typeof x !== "number") {
    throw "Invalid argument";
  }
  return x ** 3;
}

async function compute(x) {
  try {
    const doubledX = await double(x);
    const t = cube(x)
    return cube(x) // В случае compute('2') возвращаем rejected промис и не попадаем в catch
  } catch (e) {
    throw "Error while computing";
  } 
}

compute(2).then(
  x => console.log(1, x), // 1 8
  x => console.log(2, x),
);

compute("2").then(
  x => console.log(1, x),
  x => console.log(2, x), // 2 Invalid argument
);