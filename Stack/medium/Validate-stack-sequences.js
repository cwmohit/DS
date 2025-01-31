const fs = require('fs');

/*
## Validate Stack Sequences

Given two integer arrays pushed and popped each with distinct values, return true if this could have been the result of a sequence of push and pop operations on an initially empty stack, or false otherwise.

Example 1:
Input: pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
Output: true
Explanation: We might do the following sequence:
push(1), push(2), push(3), push(4),
pop() -> 4,
push(5),
pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1

Example 2:
Input: pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
Output: false
Explanation: 1 cannot be popped before 2.
*/

var validateStackSequences = function(pushed, popped) {
    let i=0, j=0, st = [];
    let n = pushed.length;

    while(i<n && j<n){
        st.push(pushed[i]);

        while(!(st.length === 0) && j<n && popped[j] === st[st.length - 1]){
            st.pop();
            j++;
        }

        i++;
    }

    return st.length===0;
};







// Custom logging function that writes to output.txt and moves to the next line
function customLog(message) {
    fs.appendFile('output.txt', message + '\n', (err) => {
        if (err) {
            console.error('Error writing to output.txt:', err);
        }
    });
}

// Read input from input.txt
fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading input file:', err);
        return;
    }

    // Call your function with the input data
    const input = data.trim().split('\n');
    const pushed = JSON.parse(input[0].split('=')[1].trim()); 
    const popped = JSON.parse(input[1].split('=')[1].trim()); 

    // Call your function with the input data
    const result = validateStackSequences(pushed, popped);

    // Append the result to output.txt instead of overwriting
    fs.appendFile('output.txt', JSON.stringify(result) + '\n', (err) => {
        if (err) {
            console.error('Error writing output file:', err);
        } else {
            console.log('Output written to output.txt');
        }
    });
});