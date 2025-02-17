var findTarget = function(root, k) {
    let inorderVal = [];

    // store inorder
    function inorder(root){
        if(root === null) return;

        inorder(root.left);
        inorderVal.push(root.val);
        inorder(root.right);
    }

    inorder(root);

    // used two pointer approach
    let i=0, j=inorderVal.length-1;

    while(i<j){
        let sum = inorderVal[i] + inorderVal[j];

        if(sum === k) return true;
        else if(sum > k) j--;
        else i++;
    }

    return false;
};