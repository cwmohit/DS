const fs = require('fs');

/*
## Complement of Base 10 integer

The complement of an integer is the integer you get when you flip all the 0's to 1's and all the 1's to 0's in its binary representation.

For example, The integer 5 is "101" in binary and its complement is "010" which is the integer 2.
Given an integer n, return its complement.

 

Example 1:

Input: n = 5
Output: 2
Explanation: 5 is "101" in binary, with complement "010" in binary, which is 2 in base-10.
Example 2:

Input: n = 7
Output: 0
Explanation: 7 is "111" in binary, with complement "000" in binary, which is 0 in base-10.
Example 3:

Input: n = 10
Output: 5
Explanation: 10 is "1010" in binary, with complement "0101" in binary, which is 5 in base-10.

Constraints:

0 <= n < 109
*/

var bitwiseComplement = function(n) {
    if(n === 0) return 1;
    let result = 0, i=0;
    while(n > 0){
        let bit = n&1;
        if(bit === 0){
            result = result + Math.pow(2, i)
        }
        n = n >> 1;
        i++;
    }

    return result;
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
    const result = bitwiseComplement(parseInt(data));

    // Append the result to output.txt instead of overwriting
    fs.appendFile('output.txt', result + '\n', (err) => {
        if (err) {
            console.error('Error writing output file:', err);
        } else {
            console.log('Output written to output.txt');
        }
    });
});
