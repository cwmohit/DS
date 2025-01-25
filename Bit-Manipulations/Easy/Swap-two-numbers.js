const fs = require('fs');

/*
## Swap two numbers

You are given two numbers a and b. Your task is to swap the given two numbers.

Note: Try to do it without a temporary variable.

Examples:

Input: a = 13, b = 9
Output: 9 13
Explanation: After swapping it becomes 9 and 13.
Input: a = 15, b = 8
Output: 8 15
Explanation: after swapping it becomes 8 and 15.
Constraints:
1 ≤ a, b ≤ 106

*/

function swap(a, b) {
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;

    return [a, b];
}














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
    const a = parseInt(input[0].split('=')[1].trim()); 
    const b = parseInt(input[1].split('=')[1].trim());

    // Call your function with the input data
    const result = swap(a, b);

    // Append the result to output.txt instead of overwriting
    fs.appendFile('output.txt', result + '\n', (err) => {
        if (err) {
            console.error('Error writing output file:', err);
        } else {
            console.log('Output written to output.txt');
        }
    });
});
