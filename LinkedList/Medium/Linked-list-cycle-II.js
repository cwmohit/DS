/*
## Linked List Cycle II

Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.

Do not modify the linked list.

Example 1:
Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1
Explanation: There is a cycle in the linked list, where tail connects to the second node.

Example 2:
Input: head = [1,2], pos = 0
Output: tail connects to node index 0
Explanation: There is a cycle in the linked list, where tail connects to the first node.

Example 3:
Input: head = [1], pos = -1
Output: no cycle
Explanation: There is no cycle in the linked list.
 
Constraints:
The number of the nodes in the list is in the range [0, 104].
-105 <= Node.val <= 105
pos is -1 or a valid index in the linked-list.
*/

var detectCycle = function(head) {
    let visited = new Map();
    let current = head;
    
    while (current) {
        if (visited.has(current)) {
            return current; 
        }
        visited.set(current, true);
        current = current.next;
    }
    
    return null;
};


// Approach II
var detectCycle = function(head) {
    if (head === null || head.next === null) return null;

    let slow = head, fast = head;

    while (fast !== null && fast.next !== null) {
        fast = fast.next;
        if (fast !== null) {
            fast = fast.next;
        }
        slow = slow.next;

        if (slow === fast) {
            break;
        }
    }

    if(slow !== fast) return null;

    // it mean cycle present, lets search entry
    let entry = head;
    while (entry !== slow) {
        entry = entry.next;
        slow = slow.next;
    }

    return entry; // Start node of the cycle
};

/*
Explain:
 
slow = L1+L2;
fast = L1+L2+nk;

let's take fast = 2*slow;
L1+L2+nk = 2*(L1+L2);
nk = L1+L2;
L1 = L2-nk; 

L1 distance will cover by entry 
slow needs to cover L2-nk

Will return their interaction
*/