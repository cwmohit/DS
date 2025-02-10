const fs = require('fs');

/*
## Binary Tree Postorder Traversal

Given the root of a binary tree, return the postorder traversal of its nodes' values.

Example 1:
Input: root = [1,null,2,3]
Output: [3,2,1]

Explanation:
Example 2:
Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
Output: [4,6,7,5,2,9,8,3,1]
*/


class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

var postorderTraversal = function(root) {
    if(root === null) return [];

    return [...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val];
};

// Approach 2
var postorderTraversal = function(root){
    let postorder = [];
  
    if (root === null) {
      return preorder;
    }
  
    let stack = [];
    stack.push(root);
  
    // Perform iterative preorder traversal
    while (stack.length > 0) {
      root = stack.pop();
  
      postorder.unshift(root.val);
  
      if (root.right !== null) {
        stack.push(root.right);
      }
  
      if (root.left !== null) {
        stack.push(root.left);
      }
    }
  
    return postorder;
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

customLog(postorderTraversal(root)); // Output: [3,2,1]

function customLog(...message) {
    fs.appendFile('output.txt', JSON.stringify(message) + '\n', (err) => {
        if (err) {
            console.error('Error writing to output.txt:', err);
        }
    });
}