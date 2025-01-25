const fs = require('fs');

/*
## Reverse Integer

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
 

Constraints:

-231 <= x <= 231 - 1

*/

let INT_MAX = (2 ** 31 - 1);
let INT_MIN = -(2 ** 31);

function isWithinRange(num) {
    return num >= INT_MIN && num <= INT_MAX;
}

var reverse = function(x) {
    let result = 0, n = x, sign = 1;

    if(x < 0){ n = -(n); sign = -1; }

    while(n > 0){
        let rem = n%10;
        if((result > INT_MAX/10) || (result < INT_MIN/10)) return 0;
        result = (result*10) + rem;
        n=Math.floor(n/10);
    }

     if(!isWithinRange(result)) return 0;

    return result * sign;
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
    const result = reverse(Number(data));

    // Append the result to output.txt instead of overwriting
    fs.appendFile('output.txt', result + '\n', (err) => {
        if (err) {
            console.error('Error writing output file:', err);
        } else {
            console.log('Output written to output.txt');
        }
    });
});
