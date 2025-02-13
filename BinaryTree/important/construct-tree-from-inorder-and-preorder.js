class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function buildTree(preorder, inorder) {
  const inorderMap = new Map();
  inorder.forEach((val, index) => inorderMap.set(val, index));

  let preorderIndex = 0;
  function helper(left, right) {
    if (left > right) return null;

    const rootValue = preorder[preorderIndex++];
    const root = new TreeNode(rootValue);

    const inorderIndex = inorderMap.get(rootValue);

    root.left = helper(left, inorderIndex - 1);
    root.right = helper(inorderIndex + 1, right);

    return root;
  }

  return helper(0, inorder.length - 1);
}

// Example usage:
const preorder = [3, 9, 20, 15, 7];
const inorder = [9, 3, 15, 20, 7];

const tree = buildTree(preorder, inorder);
console.log(tree);
