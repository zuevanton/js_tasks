function allLeavesAtSameLevel(node, depth = 0, leafLevel = {}) {
  if(node === undefined) {
    return true
  }

  if(node.left === undefined && node.right === undefined) {
    if(leafLevel.value === undefined) {
      leafLevel.value = depth
      return true
    }
    return leafLevel.value === depth
  }

  return allLeavesAtSameLevel(node.left, depth + 1, leafLevel) &&
   allLeavesAtSameLevel(node.right, depth + 1, leafLevel)
}