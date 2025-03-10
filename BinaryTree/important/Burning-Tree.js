/*
## Amount of Time for Binary Tree to Be Infected

You are given the root of a binary tree with unique values, and an integer start. At minute 0, an infection starts from the node with value start.

Each minute, a node becomes infected if:

The node is currently uninfected.
The node is adjacent to an infected node.
Return the number of minutes needed for the entire tree to be infected.

Example 1:
Input: root = [1,5,3,null,4,10,6,9,2], start = 3
Output: 4
Explanation: The following nodes are infected during:
- Minute 0: Node 3
- Minute 1: Nodes 1, 10 and 6
- Minute 2: Node 5
- Minute 3: Node 4
- Minute 4: Nodes 9 and 2
It takes 4 minutes for the whole tree to be infected so we return 4.

Example 2:
Input: root = [1], start = 1
Output: 0
Explanation: At minute 0, the only node in the tree is infected so we return 0.
 
Constraints:
The number of nodes in the tree is in the range [1, 105].
1 <= Node.val <= 105
Each node has a unique value.
A node with a value of start exists in the tree.
*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} start
 * @return {number}
 */
function burnTree(targetNode, nodeParentMapping) {
    let visited = new Map();
    let q = [targetNode];
    visited.set(targetNode, true);
    let ans = 0;

    while (q.length > 0) {
        let size = q.length;
        let flag = false;

        for (let i = 0; i < size; i++) {
            let front = q.shift(); // Process node

            if (front?.left && !visited.has(front.left)) {
                q.push(front.left);
                visited.set(front.left, true);
                flag = true;
            }

            if (front?.right && !visited.has(front.right)) {
                q.push(front.right);
                visited.set(front.right, true);
                flag = true;
            }

            if (nodeParentMapping.get(front) && !visited.has(nodeParentMapping.get(front))) {
                q.push(nodeParentMapping.get(front));
                visited.set(nodeParentMapping.get(front), true);
                flag = true;
            }
        }

        if (flag) ans++;
    }
    return ans;
}

function createParentMapping(root, target, nodeParentMapping) {
    if (!root) return null;

    let res = null;
    let q = [root];
    nodeParentMapping.set(root, null);

    while (q.length > 0) {
        let front = q.shift();

        if (front.val === target) {
            res = front;
        }

        if (front.left) {
            nodeParentMapping.set(front.left, front);
            q.push(front.left);
        }
        if (front.right) {
            nodeParentMapping.set(front.right, front);
            q.push(front.right);
        }
    }

    return res; 
}


// main function
var amountOfTime = function (root, start) {
    if (!root) return 0;

    let nodeParentMapping = new Map();
    let targetNode = createParentMapping(root, start, nodeParentMapping);

    return burnTree(targetNode, nodeParentMapping);
};
