const isObj = x => typeof x === 'object' && !Array.isArray(x) && x !== null

const recordDepth = (tree, depth = 0) => {
  if(!isObj(tree)) {
    return null
  }

  tree.depth = depth
  
  for(const key in tree) {
    recordDepth(tree[key], depth + 1)
  }
  return tree
}

const tree = { a: 1, b: 2, c: { d: 3 }};
console.log(recordDepth(tree)) // { a: 1, b: 2, c: { d: 3, depth: 1}, depth: 0 }
