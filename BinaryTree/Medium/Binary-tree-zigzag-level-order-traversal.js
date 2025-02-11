var zigzagLevelOrder = function(root) {
    if (!root) return [];

    let result = [];
    let queue = [root];
    let leftToRight = true;

    while (queue.length > 0) {
        let levelSize = queue.length;
        let levelNodes = [];

        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();
            
            if (leftToRight) {
                levelNodes.push(node.val);
            } else {
                levelNodes.unshift(node.val); // Insert at beginning for reverse order
            }

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(levelNodes);
        leftToRight = !leftToRight; // Toggle direction
    }

    return result;
};