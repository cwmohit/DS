/*
## Reverse Linked List

Given the head of a singly linked list, reverse the list, and return the reversed list.

Example 1:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Example 2:
Input: head = [1,2]
Output: [2,1]

Example 3:
Input: head = []
Output: []

Constraints:
The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000
Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?
*/

// Approach 1
var reverseList = function(head) {
    let prev = null;
    let curr = head;
    while (curr !== null) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev; 
};

// Approach 2
var reverseList = function(head) {
    function reverse(curr, prev) {
        if (curr === null) return prev;
        let next = curr.next;
        curr.next = prev;
        return reverse(next, curr);
    }
    return reverse(head, null);
};

