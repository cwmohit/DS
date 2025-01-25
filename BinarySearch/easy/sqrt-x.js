const fs = require('fs');

/*
## Sqrt(x)

Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 

Example 1:

Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.
Example 2:

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
*/

var mySqrt = function(x) {
    let ans = 0;
    if (x === 0) return 0;
    let left = 1;
    let right = x;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (mid * mid === x) {
            return mid;
        } else if (mid * mid < x) {
            left = mid + 1;
            ans = mid;
        } else {
            right = mid - 1;
        }
    }
    return ans;  
};


function morePrecision(x, precision, tempSoln) {
    let factor = 1;
    let ans = tempSoln;

    for(let i = 0; i < precision; i++) {
        factor /= 10;

        for(let j=ans; j*j < x; j += factor) {
            ans = j;
        }
    }

    return ans;
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
    const result = mySqrt(parseInt(data));
    const actualResult = morePrecision(parseInt(data), 2, result);
    // Append the result to output.txt instead of overwriting
    fs.appendFile('output.txt', JSON.stringify(actualResult) + '\n', (err) => {
        if (err) {
            console.error('Error writing output file:', err);
        } else {
            console.log('Output written to output.txt');
        }
    });
});