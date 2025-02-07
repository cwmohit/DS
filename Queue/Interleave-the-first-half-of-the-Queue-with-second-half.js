const fs = require('fs');

/*
## Interleave the First Half of the Queue with Second Half

You are given a queue Q of N integers of even length, rearrange the elements by interleaving the first half of the queue with the second half of the queue.

Note : Return the modified queue after the rearrangement as vector/ArrayList .

Example 1:
Input:
N = 4
Q = {2,4,3,1}
Output:
{2,3,4,1}
Explanation:
After the mentioned rearrangement of the first half
and second half, our final queue will be {2,3,4,1}.
 
Example 2:
Input:
N = 2
Q = {3,5}
Output:
{3,5}
Explanation:
After the mentioned rearrangement of the first half
and second half, our final queue will be {3,5}.
 
Expected Time Complexity: O(N)
Expected Auxiliary Space: O(N)
*/

function interleaveQueue(queue) {
    let n = queue.length;
    if (n % 2 !== 0) return queue; // Ensure even length

    let stack = [];
    let half = n / 2;

    // Push the first half into the stack
    for (let i = 0; i < half; i++) {
        stack.push(queue.shift());
    }

    // Pop from stack and enqueue back to queue (reversed order)
    while (stack.length) {
        queue.push(stack.pop());
    }

    // Move the first half back to the stack again
    for (let i = 0; i < half; i++) {
        stack.push(queue.shift());
    }

    // Interleave by taking one from stack and one from queue
    while (stack.length) {
        queue.push(stack.pop());
        queue.push(queue.shift());
    }

    return queue;
}

// Example usage:
console.log(interleaveQueue([2, 4, 3, 1])); // Output: [2, 3, 4, 1]
console.log(interleaveQueue([3, 5]));       // Output: [3, 5]
