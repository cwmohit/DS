/*
## Convert Sorted List to Binary Search Tree

Given the head of a singly linked list where elements are sorted in ascending order, convert it to a height-balanced binary search tree.
*/


var sortedListToBST = function(head) {
    if (!head) return null;
    if (!head.next) return new TreeNode(head.val); 

    let slow = head;
    let fast = head;
    let prev = null;

    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    const root = new TreeNode(slow.val);
    
    prev.next = null;

    root.left = sortedListToBST(head);  
    root.right = sortedListToBST(slow.next);  

    return root;
};
