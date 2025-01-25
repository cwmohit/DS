const fs = require('fs');

/*
## Nth root of number

Problem Statement: Given two numbers N and M, find the Nth root of M. The nth root of a number M is defined as a number X when raised to the power N equals M. If the 'nth root is not an integer, return -1.

Examples
Example 1:
Input Format: N = 3, M = 27
Result: 3
Explanation: The cube root of 27 is equal to 3.

Example 2:
Input Format: N = 4, M = 69
Result: -1
Explanation: The 4th root of 69 does not exist. So, the answer is -1.
*/

function func(mid, n, m) {
    let ans = 1;
    for (let i = 1; i <= n; i++) {
        ans = ans * mid;
        if (ans > m) return 2;
    }
    if (ans === m) return 1;
    return 0;
}

function NthRoot(n, m) {
    let low = 1, high = m;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let midN = func(mid, n, m);
        if (midN === 1) {
            return mid;
        } else if (midN === 0) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
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
    const n = parseInt(input[0].split('=')[1].trim()); 
    const m = parseInt(input[1].split('=')[1].trim());

    // Call your function with the input data
    const result = NthRoot(n, m);

    // Append the result to output.txt instead of overwriting
    fs.appendFile('output.txt', JSON.stringify(result) + '\n', (err) => {
        if (err) {
            console.error('Error writing output file:', err);
        } else {
            console.log('Output written to output.txt');
        }
    });
});