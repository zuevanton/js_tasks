const isObj = x => x != null && typeof x === 'object' && !Array.isArray(x)

function flattenMap(map, keys = []) {
  const res = {};
  for(const key in map) {
    keys.push(key);
    if(!isObj(map[key])) {
      res[keys.join('/')] = map[key]
    } else {
      Object.assign(res, flattenMap(map[key], keys))      
    }
    keys.pop()
  }
  return res
}

const flattenMap1 = function (map) {
  const stack = [{map, path: ''}]
  const flatten = {}

  while(stack.length > 0) {
    const {map, path} = stack.pop();

    for(const key in map) {
      const newPath = path + key;
      
      if(isObj(map[key])) {
        stack.push({map: map[key], path: newPath + '/'})
      } else {
        flatten[newPath] = map[key]
      }
    }
  }

  return flatten
}

const input = {
  'a': {
    'b': {
      'c': 12,
      'd': 'Hello World'
    },
    'e': [1,2,3]
  }
};

console.log(flattenMap(input))

// {
//   'a/b': {
//     'c': 12,
//     'd': 'Hello World'
//   },
//   'a/e': [1, 2, 3]
// }

// {
//   'a/b/c': 12,
//   'a/b/d': 'Hello World',
//   'a/e': [1,2,3]
// }

