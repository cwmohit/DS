class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// count the total nodes in the tree
function countNodes(root) {
  if (!root) return 0;
  return 1 + countNodes(root.left) + countNodes(root.right);
}

// check if the binary tree is complete
function isCompleteBinaryTree(root, index, totalNodes) {
  if (!root) return true;
  if (index >= totalNodes) return false;
  return (
    isCompleteBinaryTree(root.left, 2 * index + 1, totalNodes) &&
    isCompleteBinaryTree(root.right, 2 * index + 2, totalNodes)
  );
}

// check if the tree satisfies the Max Heap property
function isMaxHeap(root) {
  if (!root) return true;

  if (root.left && root.left.value > root.value) return false;

  if (root.right && root.right.value > root.value) return false;

  return isMaxHeap(root.left) && isMaxHeap(root.right);
}

// Main function to check if the Binary Tree is a Max Heap
function isBinaryTreeMaxHeap(root) {
  const totalNodes = countNodes(root);
  return isCompleteBinaryTree(root, 0, totalNodes) && isMaxHeap(root);
}

// Example Usage:
const root = new TreeNode(10);
root.left = new TreeNode(9);
root.right = new TreeNode(8);
root.left.left = new TreeNode(7);
root.left.right = new TreeNode(6);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(4);

console.log(isBinaryTreeMaxHeap(root)); // true
