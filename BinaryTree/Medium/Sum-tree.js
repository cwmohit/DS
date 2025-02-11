var isSumTree = function(root) {
    if (!root) return true; // Empty tree is a Sum Tree
    if (!root.left && !root.right) return true; // Leaf nodes are Sum Trees by definition

    const getTreeSum = (node) => {
        if (!node) return 0; // Null node contributes 0 to the sum
        return node.val + getTreeSum(node.left) + getTreeSum(node.right);
    };

    let leftSum = getTreeSum(root.left);
    let rightSum = getTreeSum(root.right);

    let isCurrentNodeValid = root.val === leftSum + rightSum;

    return isCurrentNodeValid && isSumTree(root.left) && isSumTree(root.right);
};