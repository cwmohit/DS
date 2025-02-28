const fs = require('fs');

/*
## Power of Two

Given an integer n, return true if it is a power of two. Otherwise, return false.

An integer n is a power of two, if there exists an integer x such that n == 2x.

Example 1:

Input: n = 1
Output: true
Explanation: 20 = 1
Example 2:

Input: n = 16
Output: true
Explanation: 24 = 16
Example 3:

Input: n = 3
Output: false
 

Constraints:
-231 <= n <= 231 - 1

*/

var isPowerOfTwo = function(n) {
    return n > 0 && ((n & (n -1)) == 0);
};


// Approach 2
var isPowerOfTwo = function(n) {
    if (n <= 0) return false;
    while (n % 2 === 0) {
        n = n / 2;
    }
    return n === 1;
};


// Approach 3
let INT_MAX = (2 ** 31 - 1);
var isPowerOfTwo = function(n) {
    let ans = 1;
    for (let i = 0; i <= 30; i++) {
        if(ans === n){
            return true;
        }

        if(ans < INT_MAX/2) ans = ans * 2;
    }
    return false;
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
    const result = isPowerOfTwo(parseInt(data));

    // Append the result to output.txt instead of overwriting
    fs.appendFile('output.txt', result + '\n', (err) => {
        if (err) {
            console.error('Error writing output file:', err);
        } else {
            console.log('Output written to output.txt');
        }
    });
});
