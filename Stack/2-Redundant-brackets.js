const fs = require('fs');

/*
## Redundant brackets

Given a string of balanced expression str, find if it contains a redundant parenthesis or not. A set of parenthesis are redundant if the same sub-expression is surrounded by unnecessary or multiple brackets. Return 1 ifit contains a redundant parenthesis, else 0.
Note: Expression may contain + , - , *, and / operators. Given expression is valid and there are no white spaces present.

Example 1:
Input: exp = ((a+b))
Output: Yes
Explanation: ((a+b)) can reduced to (a+b).

Example 2:
Input: exp = (a+b+(c+d))
Output: No
Explanation:
(a+b+(c+d)) doesn't have any redundant or multiple
brackets.
Your task:
You don't have to read input or print anything. Your task is to complete the function checkRedundancy() which takes the string s as input and returns 1 if it contains redundant parentheses else 0.

Constraints:
1<=|str|<=104
Expected Time Complexity: O(N)
Expected Auxiliary Space: O(N)
*/

function checkRedundancy(s) {
    let stack = [];
    
    for (let char of s) {
        if(char !== ')') {
            stack.push(char);
        }else{
            let top = stack.pop();
            let hasOperator = false;
            
            while (top !== '(') {
                if ('+-*/'.includes(top)) {
                    hasOperator = true;
                }
                top = stack.pop();
            }
            
            if (!hasOperator) {
                return 1;
            }
        }
    }
    
    return 0; 
}

/*
((a+b))

[]

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
    const result = checkRedundancy(input);

    // Append the result to output.txt instead of overwriting
    fs.appendFile('output.txt', JSON.stringify(result) + '\n', (err) => {
        if (err) {
            console.error('Error writing output file:', err);
        } else {
            console.log('Output written to output.txt');
        }
    });
});