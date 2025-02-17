var deleteNode = function(root, key) {
    if(root === null) return root;

    if(root.val === key){
        if(!root.left && !root.right){
            return null;
        }else if(root.left && !root.right){
            return root.left; 
        }else if(!root.left && root.right){
            return root.right;
        }else{
            let mini = findMin(root.right); 
            root.val = mini.val;
            root.right = deleteNode(root.right, mini.val); 
        }
    }else if(root.val > key){
       root.left = deleteNode(root.left, key);
       return root;
    }else{
        root.right = deleteNode(root.right, key);
        return root;
    }

    return root;
};

var findMin = function(node) {
    while (node.left !== null) {
        node = node.left;
    }
    return node;
};