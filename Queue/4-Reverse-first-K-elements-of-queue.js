const fs = require('fs');

/*
## Reverse First K elements of Queue

Given an integer K and a queue of integers, we need to reverse the order of the first K elements of the queue, leaving the other elements in the same relative order.

Only following standard operations are allowed on queue.

enqueue(x) : Add an item x to rear of queue
dequeue() : Remove an item from front of queue
size() : Returns number of elements in queue.
front() : Finds front item.
Note: The above operations represent the general processings. In-built functions of the respective languages can be used to solve the problem.

Example 1:
Input:
5 3
1 2 3 4 5
Output: 
3 2 1 4 5
Explanation: 
After reversing the given
input from the 3rd position the resultant
output will be 3 2 1 4 5.

Example 2:
Input:
4 4
4 3 2 1
Output: 
1 2 3 4
Explanation: 
After reversing the given
input from the 4th position the resultant
output will be 1 2 3 4.

Your Task:
Complete the provided function modifyQueue() that takes queue and K as parameters and returns a modified queue. The printing is done automatically by the driver code.
*/

function reverseKElementsQueue(queue, k) {
    if (k > queue.size() || k <= 0) return queue; 

    let stack = [];
    let count = 0;

    // Step 1: Dequeue first k elements and push them onto the stack
    while (count < k) {
        stack.push(queue.dequeue());
        count++;
    }

    // Step 2: Push back the stack elements into the queue
    while (stack.length > 0) {
        queue.enqueue(stack.pop());
    }

    // Step 3: Move the remaining elements to the back to maintain order
    let t = queue.size() - k;
    while (t--) {
        queue.enqueue(queue.dequeue()); 
    }

    return queue;
}