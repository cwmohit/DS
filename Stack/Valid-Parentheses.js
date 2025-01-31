const fs = require('fs');

/*
## Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 
Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

Example 4:
Input: s = "([])"
Output: true
*/

var isValid = function(s) {
    let stack = [];

    for(let i=0;i<s.length;i++){
        if(stack.length === 0 || s[i] === '(' || s[i] === '{' || s[i] === '['){
            stack.push(s[i]);
            continue;
        }

        if(s[i] === ')'){
            if(stack[stack.length - 1] === '('){
                stack.pop();
            }else{
                return false;
            }
        }else if(s[i] === ']'){
            if(stack[stack.length - 1] === '['){
                stack.pop();
            }else{
                return false;
            }
        }else if(s[i] === '}'){
            if(stack[stack.length - 1] === '{'){
                stack.pop();
            }else{
                return false;
            }
        }
    }


    return stack.length === 0;
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
    const input = data.trim();

    // Call your function with the input data
    const result = isValid(input);

    // Append the result to output.txt instead of overwriting
    fs.appendFile('output.txt', JSON.stringify(result) + '\n', (err) => {
        if (err) {
            console.error('Error writing output file:', err);
        } else {
            console.log('Output written to output.txt');
        }
    });
});