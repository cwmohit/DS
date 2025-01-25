const fs = require('fs');

/*
## Pow(x, n)

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
 

Constraints:

-100.0 < x < 100.0
-231 <= n <= 231-1
n is an integer.
Either x is not zero or n > 0.
-104 <= xn <= 104
*/

function powBitwise(x, n) {
    // Handle negative exponents
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }

    let result = 1;
    let currentProduct = x;

    while (n > 0) {
        // Check if the least significant bit is 1 (n is odd)
        if (n & 1) {
            result *= currentProduct;
        }
        // Square the base
        currentProduct *= currentProduct;
        // Right shift n to divide it by 2
        n >>= 1;
    }

    return result;
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

    const input = data.trim().split('\n');
    const x = input[0].split('=')[1].trim(); // Extract and parse the x value
    const n = input[1].split('=')[1].trim(); // Extract and parse the n value

    // Call your function with the input data
    const result = powBitwise(x, n);

    // Append the result to output.txt instead of overwriting
    fs.appendFile('output.txt', result + '\n', (err) => {
        if (err) {
            console.error('Error writing output file:', err);
        } else {
            console.log('Output written to output.txt');
        }
    });
});
