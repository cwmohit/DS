const fs = require('fs');
/*
## Vertical Order Traversal of a Binary Tree

Given the root of a binary tree, calculate the vertical order traversal of the binary tree.

For each node at position (row, col), its left and right children will be at positions (row + 1, col - 1) and (row + 1, col + 1) respectively. The root of the tree is at (0, 0).

The vertical order traversal of a binary tree is a list of top-to-bottom orderings for each column index starting from the leftmost column and ending on the rightmost column. There may be multiple nodes in the same row and same column. In such a case, sort these nodes by their values.

Return the vertical order traversal of the binary tree.

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: [[9],[3,15],[20],[7]]
Explanation:
Column -1: Only node 9 is in this column.
Column 0: Nodes 3 and 15 are in this column in that order from top to bottom.
Column 1: Only node 20 is in this column.
Column 2: Only node 7 is in this column.

Example 2:
Input: root = [1,2,3,4,5,6,7]
Output: [[4],[2],[1,5,6],[3],[7]]
Explanation:
Column -2: Only node 4 is in this column.
Column -1: Only node 2 is in this column.
Column 0: Nodes 1, 5, and 6 are in this column.
          1 is at the top, so it comes first.
          5 and 6 are at the same position (2, 0), so we order them by their value, 5 before 6.
Column 1: Only node 3 is in this column.
Column 2: Only node 7 is in this column.
*/
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function verticalOrderTraversal(root) {
    if (!root) return [];

    let columnMap = new Map();  // Mapping: { colIndex -> [[row, value], [row, value]] }
    let queue = [[root, 0, 0]]; // [node, row, col]

    while (queue.length) {
        let [node, row, col] = queue.shift();

        if (!columnMap.has(col)) columnMap.set(col, []);
        columnMap.get(col).push([row, node.val]);

        if (node.left) queue.push([node.left, row + 1, col - 1]);
        if (node.right) queue.push([node.right, row + 1, col + 1]);
    }

    // Sort columns based on column index
    let sortedColumns = [...columnMap.keys()].sort((a, b) => a - b);
    let result = [];

    // Process each column
    for (let col of sortedColumns) {
        let values = columnMap.get(col);
        values.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]); // Sort by row first, then value
        result.push(values.map(([row, value]) => value));
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

customLog(verticalOrderTraversal(root)); // [[4],[2],[1,5,6],[3],[7]]


function customLog(...message) {
    fs.appendFile('output.txt', JSON.stringify(message) + '\n', (err) => {
        if (err) {
            console.error('Error writing to output.txt:', err);
        }
    });
}