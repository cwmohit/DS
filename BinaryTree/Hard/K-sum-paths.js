const fs = require("fs");
/*
## K Sum Paths

Given a binary tree and an integer k, determine the number of downward-only paths where the sum of the node values in the path equals k. A path can start and end at any node within the tree but must always move downward (from parent to child).
*/
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function kSumPaths(root, K) {
  let count = 0;

  function solve(node, path) {
    if (!node) return;

    // Add current node to path
    path.push(node.val);

    // Recursive calls
    solve(node.left, path);
    solve(node.right, path);

    // Check all subarrays ending at the current node
    let tempSum = 0;
    for (let i = path.length - 1; i >= 0; i--) {
      tempSum += path[i];
      if (tempSum === K) {
        count++;
      }
    }

    // Backtrack: Remove last node before returning
    path.pop();
  }

  solve(root, []);
  return count;
}

const root = new TreeNode(
  1,
  new TreeNode(3, new TreeNode(2), new TreeNode(1, null, new TreeNode(1))),
  new TreeNode(
    -1,
    new TreeNode(4, new TreeNode(1), new TreeNode(2)),
    new TreeNode(5, null, new TreeNode(6))
  )
);

customLog(kSumPaths(root, 5)); // Output: Number of valid paths

function customLog(...message) {
  fs.appendFile("output.txt", JSON.stringify(message) + "\n", (err) => {
    if (err) {
      console.error("Error writing to output.txt:", err);
    }
  });
}
