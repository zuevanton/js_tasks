const isObj = x => x != null && typeof x === 'object' && !Array.isArray(x)

function search(files, path = []) {
  if(!isObj(files)) {
    return path.join("/")
  }

  for(const folder in files) {
    try {
      return search(files[folder], [...path, folder])
    } catch(e) {}
  }
  throw new Error('no files')
}

const test = { 
  
  'New folder (1)': { 'New folder': { 'funnyjoke.txt': 'lol i pranked you!!!' } },
   }
const test2 = {
  'New folder': {
    'New folder': {}
  },
  'New folder (1)': {
    'New folder': {
      'funnyjoke.txt': 'lol i pranked you!!!'
    }
  },
  'New folder (2)': {}
}
console.log(search(test2)) // 'New folder (1)/New folder/funnyjoke.txt'