var balanceBST = function(root) {
    if (!root) return null; 

    let inorderVal = [];

    function inorder(node) {
        if (node === null) return;
        inorder(node.left);
        inorderVal.push(node.val); 
        inorder(node.right);
    }

    inorder(root);

    function inorderToBst(s, e, inValues){
        if(s > e) return null;

        let mid = Math.floor((s + e) / 2);
        let root = new TreeNode(inValues[mid]);
        root.left = inorderToBst(s, mid-1, inValues);
        root.right = inorderToBst(mid+1, e, inValues);
        return root;
    }

    return inorderToBst(0, inorderVal.length-1, inorderVal);
};