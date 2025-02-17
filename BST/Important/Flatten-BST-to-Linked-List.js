function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

var flatten = function(root) {
    if (!root) return null; 

    let inorderVal = [];

    function inorder(node) {
        if (node === null) return;
        inorder(node.left);
        inorderVal.push(node.val); 
        inorder(node.right);
    }

    inorder(root);

    if (inorderVal.length === 0) return null;

    let newRoot = new TreeNode(inorderVal[0]);
    let curr = newRoot;

    for (let i = 1; i < inorderVal.length; i++) {
        let temp = new TreeNode(inorderVal[i]);
        curr.left = null;
        curr.right = temp;
        curr = temp;
    }

    return newRoot;
};