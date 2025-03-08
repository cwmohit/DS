const fs = require('fs');

/*
## Basic Calculator

Given a string s representing a valid expression, implement a basic calculator to evaluate it, and return the result of the evaluation.

Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

Example 1:
Input: s = "1 + 1"
Output: 2

Example 2:
Input: s = " 2-1 + 2 "
Output: 3

Example 3:
Input: s = "(1+(4+5+2)-3)+(6+8)"
Output: 23
 
Constraints:
1 <= s.length <= 3 * 105
s consists of digits, '+', '-', '(', ')', and ' '.
s represents a valid expression.
'+' is not used as a unary operation (i.e., "+1" and "+(2 + 3)" is invalid).
'-' could be used as a unary operation (i.e., "-1" and "-(2 + 3)" is valid).
There will be no two consecutive operators in the input.
Every number and running calculation will fit in a signed 32-bit integer.
*/

var calculate = function(s) {
    let ans = 0;
    let num = 0;
    let sign = 1;
    let stack = [];
  
    for (let i = 0; i < s.length; i++) {
      const c = s[i];
      if (!isNaN(parseInt(c))) {
          num = num * 10 + (parseInt(c));
      }else if (c === '+' || c === '-') {
          ans += sign * num;
          sign = (c === '+' ? 1 : -1);
          num = 0;
      }else if (c === '(') {
          stack.push(ans);
          stack.push(sign);
          ans = 0;
          sign = 1;
          num = 0;
      }else if (c === ')') {
          ans += sign * num;
          let stack_sign = stack[stack.length - 1]; stack.pop();
          let last_result = stack[stack.length - 1]; stack.pop();
          ans *= stack_sign;
          ans += last_result;
          num = 0;
      }
    }
  
    return ans + (num*sign);
};

/* explain algo
1. initialize ans, num, sign, stack
2. loop through string
3. if digit, multiply num by 10 and add digit
4. if '+' or '-', add num to ans and reset num and sign
5. if '(', push ans and sign to stack, reset ans and sign
6. if ')', add num to ans, pop sign and last_result from stack, multiply ans
by sign and add last_result to ans
7. return ans + (num*sign)
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
    const input = data.trim();

    // Call your function with the input data
    const result = calculate(input);

    // Append the result to output.txt instead of overwriting
    fs.appendFile('output.txt', JSON.stringify(result) + '\n', (err) => {
        if (err) {
            console.error('Error writing output file:', err);
        } else {
            console.log('Output written to output.txt');
        }
    });
});