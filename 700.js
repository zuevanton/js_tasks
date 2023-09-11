class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null
  }

  add(value) {
    if(!this.root) {
      this.root = new TreeNode(value)
    } else {
      let node = this.root
      let newNode = new TreeNode(value)
      while(node) {
        if(value > node.value) {
          if(!node.right) {
            break
          }
          node = node.right
        } else {
          if(!node.left) {
            break
          }
          node = node.left
        }
      }

      if(value > node.value) {
        node.right = newNode
      } else {
        node.left = newNode
      }
    }
  }

  sumTheTreeValues(root = this.root) {
    if(!root){
      return 0
    }
    return root.value + this.sumTheTreeValues(root.left) + this.sumTheTreeValues(root.right)
  }

  myMaxSum(root = this.root, sum = 0) {
    if(!root){
      return sum
    }
    return root.value + this.maxSum(root.right)
  }

  //           10
  //         /   \ 
  //        9     11
  //      /
  //     8
  // 


  maxSum(root = this.root) {
    if(!root){
      return 0
    }
    return root.value + Math.max(this.maxSum(root.right), this.maxSum(root.right))
  }
}

const tree = new BinaryTree()
tree.add(5)
tree.add(6)
tree.add(1)
tree.add(2)
tree.add(3)



console.log(tree.sumTheTreeValues())
console.log(tree.maxSum())