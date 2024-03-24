const primitiveSizes = {
  "char": 1,
  "short": 2,
  "int": 2,
  "long": 4,
  "long long": 8,
  "unsigned char": 1,
  "unsigned short": 2,
  "unsigned int": 2,
  "unsigned long": 4,
  "unsigned long long": 8,
  "float": 4,
  "double": 8,
};

const sizeof = type => {
  if(typeof type === 'string') {
    return primitiveSizes[type]
  }
  const sizes = type.members.map(sizeof);
  if(type.type === 'union') {
    return Math.max(...sizes, 0);
  }
  if(type.type === 'struct') {
    return sizes.reduce((acc, next) => acc + next, 0)
  }
}

console.log(sizeof({
  type: "struct",
  members: ["int", "char"]
})) // 3

console.log(sizeof({
  type: "union",
  members: ["long long", "double"]
})) // 8

console.log(sizeof({
  type: "struct",
  members: [
    "unsigned char",
    "unsigned char",
    "unsigned char",
    "double",
    "double",
    {
      type: "union",
      members: [
        "unsigned short",
        "unsigned short",
        "unsigned short",
        "long long",
        "float",
        "float",
        {
          type: "struct",
          members: ["long", "unsigned int"]
        }
      ]
    },
    "short"
  ]
})) // 29

console.log(sizeof({
  type: "struct",
  members: [
    "int",
    "int",
    "float",
    {
      type: "union",
      members: []
    }
  ]
})) // 8