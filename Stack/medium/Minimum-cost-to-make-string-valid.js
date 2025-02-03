const fs = require('fs');

/*
## Minimum Cost To Make String Valid

Ninja has been given a string ‘STR’ containing either ‘{’ or ‘}’. 'STR’ is called valid if all the brackets are balanced. Formally for each opening bracket, there must be a closing bracket right to it.

For Example:
“{}{}”, “{{}}”, “{{}{}}” are valid strings while “}{}”, “{}}{{}”, “{{}}}{“ are not valid strings.
Ninja wants to make ‘STR’ valid by performing some operations on it. In one operation, he can convert ‘{’ into ‘}’ or vice versa, and the cost of one such operation is 1.

Your task is to help Ninja determine the minimum cost to make ‘STR’ valid.

For Example:
Minimum operations to make ‘STR’ =  “{{“ valid is 1.
In one operation, we can convert ‘{’ at index ‘1’ (0-based indexing) to ‘}’. The ‘STR’ now becomes "{}" which is a valid string.

Note:
Return -1 if it is impossible to make ‘STR’ valid.
*/

function minCostToMakeValid(str) {
    if (str.length % 2 !== 0) return -1; // If odd length, it's impossible to balance

    let stack = [];
    
    for (let char of str) {
        if (char === '{') {
            stack.push(char);
        } else {
            if (stack.length > 0 && stack[stack.length - 1] === '{') {
                stack.pop(); // Balanced pair found
            } else {
                stack.push(char); 
            }
        }
    }
    
    let openCount = 0, closeCount = 0;

    // invalid brakets string
    while (stack.length) {
        if (stack.pop() === '{') {
            openCount++;
        } else {
            closeCount++;
        }
    }
    
    return Math.ceil(openCount / 2) + Math.ceil(closeCount / 2);
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
    const input = data.trim();

    // Call your function with the input data
    const result = minCostToMakeValid(input);

    // Append the result to output.txt instead of overwriting
    fs.appendFile('output.txt', JSON.stringify(result) + '\n', (err) => {
        if (err) {
            console.error('Error writing output file:', err);
        } else {
            console.log('Output written to output.txt');
        }
    });
});