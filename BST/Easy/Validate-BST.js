function isBST(root, min, max) {
  if (root === null) return true;

  if (root.val > min && root.val < max) {
    let left = isBST(root.left, min, root.val);
    let right = isBST(root.right, root.val, max);

    return left && right;
  }

  return false;
}

var isValidBST = function (root) {
  return isBST(root, -Infinity, Infinity);
};
