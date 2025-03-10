/*

## Swapping Nodes in a Linked List

You are given the head of a linked list, and an integer k.

Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).

Example 1:
Input: head = [1,2,3,4,5], k = 2
Output: [1,4,3,2,5]

Example 2:
Input: head = [7,9,6,6,7,8,3,0,9,5], k = 5
Output: [7,9,6,6,8,7,3,0,9,5]
*/


var swapNodes = function (head, k) {
    let first = null, second = null, current = head;
    
    for (let i = 1; i < k; i++) {
        current = current.next;
    }
    first = current;

    second = head;
    current = current.next;
    while (current) {
        current = current.next;
        second = second.next;
    }

    [first.val, second.val] = [second.val, first.val];

    return head;
};