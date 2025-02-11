const fs = require('fs');
/*
## Top View of Binary Tree

You are given a binary tree, and your task is to return its top view. The top view of a binary tree is the set of nodes visible when the tree is viewed from the top.

Note: 
Return the nodes from the leftmost node to the rightmost node.
If two nodes are at the same position (horizontal distance) and are outside the shadow of the tree, consider the leftmost node only. 

Examples:
Input: root[] = [1, 2, 3] 
Output: [2, 1, 3]

Input: root[] = [10, 20, 30, 40, 60, 90, 100]
Output: [40, 20, 10, 30, 100]
Explaination: The root 10 is visible.
On the left, 40 is the leftmost node and visible, followed by 20.
On the right, 30 and 100 are visible. Thus, the top view is 40 20 10 30 100.
*/
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function bottomView(root) {
  if (!root) return [];

  let columnMap = new Map(); // { horizontalDistance: nodeValue }
  let queue = [[root, 0]]; // [node, horizontalDistance]
  let minCol = 0, maxCol = 0;

  while (queue.length) {
    let [node, hd] = queue.shift();

    columnMap.set(hd, node.val);

    minCol = Math.min(minCol, hd);
    maxCol = Math.max(maxCol, hd);

    if (node.left) queue.push([node.left, hd - 1]);
    if (node.right) queue.push([node.right, hd + 1]);
  }

  // Extract values from the map in order of horizontal distance
  let result = [];
  for (let col = minCol; col <= maxCol; col++) {
    if (columnMap.has(col)) {
      result.push(columnMap.get(col));
    }
  }

  return result;
}

// Example Usage:
const root = new TreeNode(1,
    new TreeNode(2,
        new TreeNode(4),
        new TreeNode(5)
    ),
    new TreeNode(3,
        new TreeNode(6),
        new TreeNode(7)
    )
);

customLog(bottomView(root)); // Output: [[4,2,6,3,7]]


function customLog(...message) {
    fs.appendFile('output.txt', JSON.stringify(message) + '\n', (err) => {
        if (err) {
            console.error('Error writing to output.txt:', err);
        }
    });
}