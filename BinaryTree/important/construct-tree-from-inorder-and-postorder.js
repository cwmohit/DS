class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function buildTree(inorder, postorder) {
  const inorderMap = new Map();
  inorder.forEach((val, index) => inorderMap.set(val, index));

  let postorderIndex = postorder.length - 1;

  function helper(left, right) {
    if (left > right) return null;

    const rootValue = postorder[postorderIndex--];
    const root = new TreeNode(rootValue);

    const inorderIndex = inorderMap.get(rootValue);

    // Construct right subtree first (postorder visits left-right-root)
    root.right = helper(inorderIndex + 1, right);
    root.left = helper(left, inorderIndex - 1);

    return root;
  }

  return helper(0, inorder.length - 1);
}

// Example usage:
const inorder = [9, 3, 15, 20, 7];
const postorder = [9, 15, 7, 20, 3];

const tree = buildTree(inorder, postorder);
console.log(tree);
