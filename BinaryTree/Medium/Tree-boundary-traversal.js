const fs = require('fs');
/*
## Tree Boundary Traversal

Given a Binary Tree, find its Boundary Traversal. The traversal should be in the following order: 

Left Boundary: This includes all the nodes on the path from the root to the leftmost leaf node. You must prefer the left child over the right child when traversing. Do not include leaf nodes in this section.

Leaf Nodes: All leaf nodes, in left-to-right order, that are not part of the left or right boundary.

Reverse Right Boundary: This includes all the nodes on the path from the rightmost leaf node to the root, traversed in reverse order. You must prefer the right child over the left child when traversing. Do not include the root in this section if it was already included in the left boundary.

Note: If the root doesn't have a left subtree or right subtree, then the root itself is the left or right boundary. 

Examples:
Input: root[] = [1, 2, 3, 4, 5, 6, 7, N, N, 8, 9, N, N, N, N]
Output: [1, 2, 4, 8, 9, 6, 7, 3]

Explanation:
Input: root[] = [1, 2, N, 4, 9, 6, 5, N, 3, N, N, N, N 7, 8]
Output: [1, 2, 4, 6, 5, 7, 8]
*/

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function getLeftBoundary(node) {
    let curr = node.left;
    while (curr) {
        if (!isLeaf(curr)) result.push(curr.val);
        curr = curr.left ? curr.left : curr.right;
    }
}

function getLeafNodes(node) {
    if (!node) return;
    if (isLeaf(node)) {
        result.push(node.val);
        return;
    }
    getLeafNodes(node.left);
    getLeafNodes(node.right);
}

function getRightBoundary(node) {
    let stack = [];
    let curr = node.right;
    while (curr) {
        if (!isLeaf(curr)) stack.push(curr.val);
        curr = curr.right ? curr.right : curr.left;
    }
    while (stack.length) {
        result.push(stack.pop());
    }
}

function isLeaf(node) {
    return !node.left && !node.right;
}

// main function
function boundaryTraversal(root) {
    if (!root) return [];

    let result = [];

    if (!isLeaf(root)) result.push(root.val);

    // Collect boundaries
    getLeftBoundary(root);
    getLeafNodes(root);
    getRightBoundary(root);

    return result;
}

// Example Usage:

const root = new TreeNode(1,
    new TreeNode(2,
        new TreeNode(4,
            new TreeNode(8), new TreeNode(9)
        ),
        new TreeNode(5,
            new TreeNode(10), new TreeNode(11)
        )
    ),
    new TreeNode(3,
        new TreeNode(6,
            new TreeNode(12), new TreeNode(13)
        ),
        new TreeNode(7,
            new TreeNode(14), new TreeNode(15)
        )
    )
);

customLog(boundaryTraversal(root));


function customLog(...message) {
    fs.appendFile('output.txt', JSON.stringify(message) + '\n', (err) => {
        if (err) {
            console.error('Error writing to output.txt:', err);
        }
    });
}