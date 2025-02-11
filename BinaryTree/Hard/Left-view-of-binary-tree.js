function leftView(root) {
    let result = [];
  
    function traverse(node, level) {
      if (!node) return;
  
      // If this is the first node at this level, add it to result
      if (result.length === level) {
        result.push(node.val);
      }
  
      // Recursive call for left child first, then right child
      traverse(node.left, level + 1);
      traverse(node.right, level + 1);
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
0	    1	                [1]
1	    2	                [1, 2]
2	    4	                [1, 2, 4]
2	    5 (Ignored)	        [1, 2, 4]
1	    3 (Ignored)	        [1, 2, 4]
2	    6 (Ignored)     	[1, 2, 4]
*/