var bstFromPreorder = function(preorder) {
    let min = -Infinity;
    let max = Infinity;
    let i=0;

    function solve(min, max){
        if(i >= preorder.length) return null;

        if(preorder[i] < min || preorder[i] > max) return null;

        let root = new TreeNode(preorder[i++]);
        root.left = solve(min, root.val);
        root.right = solve(root.val, max);

        return root;
    }

    return solve(min, max);
};