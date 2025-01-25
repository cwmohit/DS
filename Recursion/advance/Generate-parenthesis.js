const fs = require('fs');
const path = require('path');

/*
## Generate Parentheses Problem

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]

Constraints:

1 <= n <= 8

*/

function generateParenthesis(n) {
  const result = [];
  const backtrack = (open, close, str) => {
    if (str.length === 2 * n) {
      result.push(str);
      return;
    }
    if (open < n) {
      backtrack(open + 1, close, str + "(");
    }
    if (close < open) {
      backtrack(open, close + 1, str + ")");
    }
  };
  backtrack(0, 0, "");
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

    // Call your function with the input data
    const result = generateParenthesis(data);

    // Append the result to output.txt instead of overwriting
    fs.appendFile('output.txt', JSON.stringify(result) + '\n', (err) => {
        if (err) {
            console.error('Error writing output file:', err);
        } else {
            console.log('Output written to output.txt');
        }
    });
});
