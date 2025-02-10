const fs = require('fs');

/*
## Binary Tree Inorder Traversal

Given the root of a binary tree, return the inorder traversal of its nodes' values.

Example 1:
Input: root = [1,null,2,3]
Output: [1,3,2]

Explanation:
Example 2:
Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
Output: [4,2,6,5,7,1,3,9,8]
*/


class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Approach 1
var inorderTraversal = function(root) {
    if(root === null) return [];

    return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)];
};

// Approach 2
var inorderTraversal = function(root) {
    let inorder = [];
    let stack = [];
    let current = root;

    while (current !== null || stack.length > 0) {
        // Traverse to the leftmost node
        while (current !== null) {
            stack.push(current);
            current = current.left;
        }

        // Process the node
        current = stack.pop();
        inorder.push(current.val);

        // Move to the right subtree
        current = current.right;
    }

    return inorder;
};


// Constructing the binary tree:
//        1
//         \
//          2
//         /
//        3
let root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);

customLog(inorderTraversal(root)); // Output: [1,3,2]

function customLog(...message) {
    fs.appendFile('output.txt', JSON.stringify(message) + '\n', (err) => {
        if (err) {
            console.error('Error writing to output.txt:', err);
        }
    });
}