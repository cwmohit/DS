const fs = require('fs');

/*
## Single Number II

Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:
Input: nums = [2,2,3,2]
Output: 3
Example 2:

Input: nums = [0,1,0,1,0,1,99]
Output: 99
 

Constraints:
1 <= nums.length <= 3 * 104
-231 <= nums[i] <= 231 - 1
Each element in nums appears exactly three times except for one element which appears once.

*/

function singleNumber(nums) {
    let ones = 0, twos = 0;

    for (let num of nums) {
        ones = (ones ^ num) & ~twos;
        twos = (twos ^ num) & ~ones;
    }

    return ones;
}

/*

## Solution Explanation
The problem requires finding a single number in an array where every element appears three times except for one.

 ones stores bits which comes first time and not in two's
 if bit comes second time will remove from one's
 twos stores bits which comes second time and not in one's
 if bit comes third time will remove from two's

Step-by-step Example for [4, 4, 7, 4]
We process each number in the array, updating ones and twos.

Step	num	num (binary)	ones (First Appearance)	            twos (Second Appearance)
1	    4	100	            100 (4)             	            000 (0)
2	    4	100	            000 (0) → Removed from ones	1       00 (4) → Now in twos
3	    7	111	            111 (7) → New number appears	    100 (4)
4	    4	100	            011 (3) → 4 removed from ones	    000 (0) → 4 removed from twos
*/





// Approach 2 (not optimised) O(n) 
var singleNumber = function(nums) {
    let result = 0;

    for (let i = 0; i < 32; i++) { // Check each bit position (0-31)
        let count = 0;

        for (let num of nums) {
            if ((num >> i) & 1) { // Check if the i-th bit is set
                count++;
            }
        }

        if (count % 3 !== 0) { // If this bit doesn't appear in multiples of 3
            result = result | (1 << i); // Set this bit in the result
        }
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
    const result = singleNumber(JSON.parse(data));

    // Append the result to output.txt instead of overwriting
    fs.appendFile('output.txt', JSON.stringify(result) + '\n', (err) => {
        if (err) {
            console.error('Error writing output file:', err);
        } else {
            console.log('Output written to output.txt');
        }
    });
});