// Approach 1
var countLeafNodes = function(root) {
    if (root === null) return 0;

    // If a node has no children, it's a leaf
    if (root.left === null && root.right === null) return 1;

    return countLeafNodes(root.left) + countLeafNodes(root.right);
};


// Approach 2
var countLeafNodes = function(root) {
    if (root === null) return 0;

    let count = 0;
    let queue = [root];

    while (queue.length > 0) {
        let node = queue.shift();

        if (node.left === null && node.right === null) {
            count++;
        }

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }

    return count;
};
