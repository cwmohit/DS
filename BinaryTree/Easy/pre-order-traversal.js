const fs = require('fs');

/*
## Binary Tree Preorder Traversal

Given the root of a binary tree, return the preorder traversal of its nodes' values.

Example 1:
Input: root = [1,null,2,3]
Output: [1,2,3]

Explanation:
Example 2:
Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
Output: [1,2,4,5,6,7,3,8,9]
*/


class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Approach 1
var preorderTraversal = function(root) {
    if(root === null) return [];

    return [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)];
};

// Approach 2
var preorderTraversal = function(root){
  let preorder = [];

  if (root === null) {
    return preorder;
  }

  let stack = [];
  stack.push(root);

  // Perform iterative preorder traversal
  while (stack.length > 0) {
    root = stack.pop();

    preorder.push(root.val);

    if (root.right !== null) {
      stack.push(root.right);
    }

    if (root.left !== null) {
      stack.push(root.left);
    }
  }

  return preorder;
}












// Constructing the binary tree:
//        1
//         \
//          2
//         /
//        3
let root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);

customLog(preorderTraversal(root)); // Output: [1, 2, 3]

function customLog(...message) {
    fs.appendFile('output.txt', JSON.stringify(message) + '\n', (err) => {
        if (err) {
            console.error('Error writing to output.txt:', err);
        }
    });
}