Object.prototype.hash = function(string) {
  let obj = this;

  for(const key of string.split('.')) {
    if(obj === undefined) {
      return obj
    }
    obj = obj[key] 
  }

  return obj
}


const obj = {
  person: {
    name: 'joe',
    history: {
      hometown: 'bratislava',
      bio: {
        funFact: 'I like fishing.'
      }
    }
  }
};

// console.log(obj.hash('person.name')); // 'joe'
console.log(obj.hash('person.history.bio')); // { funFact: 'I like fishing.' }
console.log(obj.hash('person.game.home')); // undefined