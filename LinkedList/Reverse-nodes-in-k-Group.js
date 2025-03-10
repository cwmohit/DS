/*
## Reverse Nodes in k-Group

Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

You may not alter the values in the list's nodes, only nodes themselves may be changed.

Example 1:
Input: head = [1,2,3,4,5], k = 2
Output: [2,1,4,3,5]

Example 2:
Input: head = [1,2,3,4,5], k = 3
Output: [3,2,1,4,5]
*/

var reverseKGroup = function(head, k) {
    if (head === null) return null;

    let curr = head;
    let count = 0;

    while (curr !== null && count < k) {
        curr = curr.next;
        count++;
    }

    // Only reverse if we have k nodes
    if (count === k) {
        let next = null;
        let prev = null;
        curr = head;
        let i = 0;

        while (curr !== null && i < k) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
            i++;
        }

        head.next = reverseKGroup(curr, k);

        return prev;
    }

    return head; 
};
