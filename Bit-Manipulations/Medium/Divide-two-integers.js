const fs = require('fs');

/*
## Divide Two Integers

Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.

The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.

Return the quotient after dividing dividend by divisor.

Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For this problem, if the quotient is strictly greater than 231 - 1, then return 231 - 1, and if the quotient is strictly less than -231, then return -231.

Example 1:
Input: dividend = 10, divisor = 3
Output: 3
Explanation: 10/3 = 3.33333.. which is truncated to 3.


Example 2:
Input: dividend = 7, divisor = -3
Output: -2
Explanation: 7/-3 = -2.33333.. which is truncated to -2.
 

Constraints:
-231 <= dividend, divisor <= 231 - 1
divisor != 0
*/

const INT_MAX = 2147483647;
const INT_MIN = -2147483648;

function divide(dividend, divisor) {
    if(dividend === divisor) return 1;
    if (divisor === 1) return dividend;
    if (dividend === INT_MIN && divisor === -1) return INT_MAX;
    if(dividend === INT_MAX && divisor === -1) return -INT_MAX;

    let sign = true;
    if((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)) sign = false;
    let n = Math.abs(dividend);
    let d = Math.abs(divisor);
    let ans = 0;

    while(n >= d){
        let count = 0;
        while(n >= (d << (count+1))){ // d << count+1 is the same as d * 2^(count+1)
            count++;
        }
        ans += 1 << count; // 1 << count is the same as 2^count
        n = n - (d << count); // d << count is the same as d * 2^count
    }

    if(ans > Math.pow(2, 31) - 1 && sign) return Math.pow(2, 31) - 1;
    if(ans < -Math.pow(2, 31) && !sign) return -Math.pow(2, 31);

    return sign ? ans : -ans;
}

/*
 Explain:
    input: 22, 3
    output: 7
    while loop
    22 >= 3
    count = 0
        22 >= 6
        count = 1
        22 >= 12
        count = 2
        22 >= 24
        end of while loop
    ans = 2^2 = 4
    n = 22 - 12 = 10
    count = 0
        while loop
        10 >= 3
        count = 1
        10 >= 6
        count = 2
        10 >= 12
        end of while loop
    ans = 4 + 2^1 = 6
    n = 10 - 6 = 4
    count = 0
        while loop
        4 >= 3
        count = 1
        4 >= 6
        end of while loop
    ans = 6 + 2^1 = 7
    n = 4 - 6 = -2
    ans = 7


    1. If the dividend is equal to the divisor, return 1.
    2. Check if the dividend and divisor have the same sign. If not, set the sign to false.
    3. Get the absolute value of the dividend and divisor.
    4. Initialize the answer to 0.
    5. While the dividend is greater than or equal to the divisor, perform the following steps
    a. Initialize a counter to 0.
    b. While the dividend is greater than or equal to the divisor multiplied by 2 raised to
    the power of count + 1, increment the count.
    c. Add 2 raised to the power of count to the answer.
    d. Subtract the divisor multiplied by 2 raised to the power of count from the dividend.
    6. If the answer is greater than 2^31 - 1 and the sign
    is true, return 2^31 - 1.
    7. If the answer is less than -2^31 and the sign is false, return -2^31.
    8. Return the answer if the sign is true, otherwise return -answer.
    *Time complexity: O(log n) where n is the dividend

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
    const input = data.trim().split('\n');
    const n = parseInt(input[0].split('=')[1].trim()); 
    const d = parseInt(input[1].split('=')[1].trim());

    // Call your function with the input data
    const result = divide(n, d);

    // Append the result to output.txt instead of overwriting
    fs.appendFile('output.txt', result + '\n', (err) => {
        if (err) {
            console.error('Error writing output file:', err);
        } else {
            console.log('Output written to output.txt');
        }
    });
});

/*
 6 - 0110
 7 - 0111

 15 - 01111
 16 - 10000



*/