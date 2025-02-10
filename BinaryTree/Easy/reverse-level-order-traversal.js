var reverseLevelOrder = function(root) {
    if (root === null) return [];

    let result = [];
    let queue = [root];

    while (queue.length > 0) {
        let levelSize = queue.length;
        let currentLevel = [];

        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift(); // Remove from front of queue
            currentLevel.push(node.val);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        // Insert the level at the beginning to reverse the order
        result.unshift(currentLevel);
    }

    return result;
};