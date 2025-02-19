class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Step 1: Perform inorder traversal to store elements in sorted order
function inorderTraversal(root, arr) {
  if (!root) return;
  inorderTraversal(root.left, arr);
  arr.push(root.value);
  inorderTraversal(root.right, arr);
}

// Step 2: Convert BST to Min Heap using preorder traversal
function convertToMinHeap(root, arr) {
  if (!root) return;

  root.value = arr.shift(); // Replace node value with next in sorted order

  convertToMinHeap(root.left, arr);
  convertToMinHeap(root.right, arr);
}

// Wrapper function to convert BST to Min Heap
function bstToMinHeap(root) {
  const arr = [];
  inorderTraversal(root, arr); // Step 1: Get sorted values
  convertToMinHeap(root, arr); // Step 2: Convert to Min Heap
}

// Example BST
const root = new Node(4);
root.left = new Node(2);
root.right = new Node(6);
root.left.left = new Node(1);
root.left.right = new Node(3);
root.right.left = new Node(5);
root.right.right = new Node(7);

console.log("Before conversion (BST - Inorder Traversal):");
inorderTraversal(root, []);
console.log();

bstToMinHeap(root);

// Helper function to print level order (for verification)
function levelOrderTraversal(root) {
  if (!root) return;

  const queue = [root];
  while (queue.length > 0) {
    const node = queue.shift();
    process.stdout.write(node.value + " ");
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
}
console.log("After conversion (Min Heap - Level Order Traversal):");
levelOrderTraversal(root);
