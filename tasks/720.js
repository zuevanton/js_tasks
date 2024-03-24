// This is here as documentation. The nodes in the tree are instances of
// this class. You don't need to change this implementation.
class Node {
  constructor(value, left = null, right = null){
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
//    5         8
//   /        /
//  3        10
//   \        \
//    4        9

const isBST1 = (node, min = -Infinity, max = Infinity) => {
  if(node === null) {
    return true
  }

  if(node.value < min || node.value > max) {
    return false
  }

  return isBST1(node.left, min, node.value) && isBST1(node.right, node.value, max)
};

const isBST2 = (node, min = -Infinity, max = Infinity) => {
  if(node === null) {
    return true
  }

  if(node.value < min || node.value > max) {
    return false
  }

  return isBST2(node.right, min, node.value) && isBST2(node.left, node.value, max)
};

const isBST = node => isBST1(node) || isBST2(node);