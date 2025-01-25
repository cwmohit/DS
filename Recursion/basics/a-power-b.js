const fs = require('fs');

/*
## A power B problem

Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

Example 1:

Input: x = 2.00000, n = 10
Output: 1024.00000
Example 2:

Input: x = 2.10000, n = 3
Output: 9.26100
Example 3:

Input: x = 2.00000, n = -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25

-100.0 < x < 100.0
-231 <= n <= 231-1
n is an integer.
Either x is not zero or n > 0.
-104 <= xn <= 104
*/

function myPow(x, n) {
    if (n === 0) return 1;
    if (n === 1) return x;

    if (n < 0) {
        x = 1 / x;
        n = -n;
    }

    let ans = myPow(x, Math.floor(n / 2));
    
    return n % 2 === 0 ? ans * ans : ans * ans * x;
    // explain
    // 2 cases only for x^n
    // 1. n is even : x^n = x^(n/2) * x^(n/2)
    // 2. n is odd : x^n = x * (x^(n/2) * x^(n/2))
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
    const x = JSON.parse(input[0].split('=')[1].trim()); // Extract and parse the nums array
    const n = parseInt(input[1].split('=')[1].trim()); // Extract and parse the target integer

    // Call your function with the input data
    const result = myPow(x, n);

    // Append the result to output.txt instead of overwriting
    fs.appendFile('output.txt', result + '\n', (err) => {
        if (err) {
            console.error('Error writing output file:', err);
        } else {
            console.log('Output written to output.txt');
        }
    });
});
