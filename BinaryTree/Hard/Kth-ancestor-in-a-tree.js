
/*
## Kth Ancestor in a Tree

Given a binary tree of size  n, a node, and a positive integer k., Your task is to complete the function kthAncestor(), the function should return the kth ancestor of the given node in the binary tree. If there does not exist any such ancestor then return -1.
Note:
1. It is guaranteed that the node exists in the tree.
2. All the nodes of the tree have distinct values.

Examples :
Input: k = 2, node = 4
Output: 1
Explanation:
Since, k is 2 and node is 4, so we first need to locate the node and look k times its ancestors. Here in this Case node 4 has 1 as his 2nd Ancestor aka the root of the tree.
*/

function kthAncestor(root, k, node) {
    let kObj = { count: k };
    let ancestor = null;

    function solve(root, kObj, node) {
        if (root == null) return null;
        if (root.val === node) return root;

        let leftAns = solve(root.left, kObj, node);
        let rightAns = solve(root.right, kObj, node);

        if (leftAns !== null || rightAns !== null) {
            kObj.count--;
            if (kObj.count === 0) {
                ancestor = root;
                return null; // Stop further propagation
            }
            return leftAns || rightAns;
        }

        return null;
    }

    solve(root, kObj, node);
    return ancestor ? ancestor.val : -1;
}