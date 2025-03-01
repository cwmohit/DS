const fs = require('fs');

/*
## Number Complement

The complement of an integer is the integer you get when you flip all the 0's to 1's and all the 1's to 0's in its binary representation.

For example, The integer 5 is "101" in binary and its complement is "010" which is the integer 2.
Given an integer num, return its complement.

Example 1:

Input: num = 5
Output: 2
Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.
Example 2:

Input: num = 1
Output: 0
Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.
 

Constraints:

1 <= num < 231
*/

var findComplement = function(num) {
    let value = num;
    let result = 0;
    let count = 0;
    while(value > 0){
        result+= (value & 1 ? 0 : 1) * (1 << count);
        value = value >> 1;
        count++;
    }

    return Number(result);
};


// Approach 2
var findComplement = function(num) {
    let bitmask = (1 << num.toString(2).length) - 1;
    return num ^ bitmask;
};

/*

How This Works
Example: num = 5

5 in binary: 101

num.toString(2).length = 3 (because 101 has 3 bits)

Bitmask Calculation
(1 << 3) - 1
1000 - 1 = 111 (which is 7 in decimal)

XOR Operation
101 (5) ^ 111 (7) = 010 (2)
Result → 2 ✅
*/

/*
    101
    111
    010

*/












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
    const result = findComplement(parseInt(data));

    // Append the result to output.txt instead of overwriting
    fs.appendFile('output.txt', result + '\n', (err) => {
        if (err) {
            console.error('Error writing output file:', err);
        } else {
            console.log('Output written to output.txt');
        }
    });
});
