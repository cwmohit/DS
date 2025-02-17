var kthSmallest = function (root, k) {
  let i = 0;
  function solve(root, k) {
    if (root === null) return -1;

    let left = solve(root.left, k);
    if (left !== -1) return left;
    
    i++;
    if (i === k) return root.val;

    return solve(root.right, k);
  }

  let ans = solve(root, k);

  return ans;
};
