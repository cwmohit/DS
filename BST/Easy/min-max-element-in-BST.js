function minValueInBST(root){
    let temp = root;

    while(temp.left !== null){
        temp = temp.left;
    }

    return temp.val;
}

function maxValueInBST(root){
    let temp = root;

    while(temp.right !== null){
        temp = temp.right;
    }

    return temp.val;
}