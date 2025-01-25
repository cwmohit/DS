const fs = require('fs');

/*
## Convert to Base 2

Given an integer n, return a binary string representing its representation in base 2.

Note that the returned string should not have leading zeros unless the string is "0".


Example 1:
Input: n = 2
Output: "10"

Input: n = 24
Output: "11000"

Constraints:
0 <= n <= 109
*/

function decimalToBase2(n) {
    let result = [];

    while(n > 0){
        let bit = n&1;
        result.push(bit);
        n = n >> 1;
    }

    return result.reverse().join('');
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
    const result = decimalToBase2(parseInt(data));

    // Append the result to output.txt instead of overwriting
    fs.appendFile('output.txt', result + '\n', (err) => {
        if (err) {
            console.error('Error writing output file:', err);
        } else {
            console.log('Output written to output.txt');
        }
    });
});
