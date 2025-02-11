function rightView(root) {
  let result = [];

  function traverse(node, level) {
    if (!node) return;

    // If this is the first node at this level, add it to the result
    if (result.length === level) {
      result.push(node.val);
    }

    // Recursive call for right child first, then left child
    traverse(node.right, level + 1);
    traverse(node.left, level + 1);
  }

  traverse(root, 0);
  return result;
}

  
/*
    1
   / \
  2   3
 / \   \
4   5   6


Level	Node Traversed	Result Stored
0	    1	            [1]
1	    3	            [1, 3]
2	    6	            [1, 3, 6]
1	    2 (Ignored)	    [1, 3, 6]
2	    5 (Ignored)	    [1, 3, 6]
2	    4 (Ignored)	    [1, 3, 6]
*/