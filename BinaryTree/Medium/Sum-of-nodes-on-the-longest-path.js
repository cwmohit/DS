const fs = require('fs');

class TreeNode {
    constructor(val = 0, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  function longestPathSum(root) {
    let maxSum = 0;
    let maxLength = 0;
  
    function solve(node, currentSum, currentLength) {
      if (node === null) {
        if (currentLength > maxLength) {
          maxLength = currentLength;
          maxSum = currentSum;
        } else if (currentLength === maxLength) {
          maxSum = Math.max(maxSum, currentSum);
        }
        return;
      }
  
      // Update sum and length
      currentSum += node.val;
  
      // Recursive calls
      solve(node.left, currentSum, currentLength + 1);
      solve(node.right, currentSum, currentLength + 1);
    }
  
    solve(root, 0, 0);
    return maxSum;
  }
  
  
  // Example usage:
  const root = new TreeNode(
    4,
    new TreeNode(2, new TreeNode(7, new TreeNode(3)), new TreeNode(1, new TreeNode(6))),
    new TreeNode(5, new TreeNode(1), new TreeNode(2))
  );

  
  customLog(longestPathSum(root)); // Output: 13
  
  function customLog(...message) {
      fs.appendFile('output.txt', JSON.stringify(message) + '\n', (err) => {
          if (err) {
              console.error('Error writing to output.txt:', err);
          }
      });
  }