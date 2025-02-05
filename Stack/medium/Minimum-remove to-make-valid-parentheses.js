const fs = require('fs');

/*
## Minimum Remove to Make Valid Parentheses

Given a string s of '(' , ')' and lowercase English characters.

Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

Formally, a parentheses string is valid if and only if:

It is the empty string, contains only lowercase characters, or
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.
 
Example 1:
Input: s = "lee(t(c)o)de)"
Output: "lee(t(c)o)de"
Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.

Example 2:
Input: s = "a)b(c)d"
Output: "ab(c)d"

Example 3:
Input: s = "))(("
Output: ""
Explanation: An empty string is also valid.
 

Constraints:
1 <= s.length <= 105
s[i] is either '(' , ')', or lowercase English letter.
*/

// Approach 1
var minRemoveToMakeValid = function(s) {
    let n = s.length;
    let st = [];
    let set = new Set();

    for(let i = 0; i <= n; i++){
        if(s[i] === '('){
            st.push(i);
        }else if(s[i] === ')'){
            if(st.length === 0){
                set.add(i);
            }else{
                st.pop();
            }
        }
    }

    while(st.length > 0){
        set.add(st.pop());
    }

    let result = "";

    for(let i=0; i < n; i++){
        if(!set.has(i)){
            result+=s[i];
        }
    }

    return result;
};


// Approach 2
var minRemoveToMakeValid = function(s) {
    let n = s.length;
    let result = [];
    let open = 0;

    // First pass: remove invalid closing parentheses
    for (let i = 0; i < n; i++) {
        if (s[i] === '(') {
            open++; 
            result.push(s[i]);
        } else if (s[i] === ')') {
            if (open > 0) {
                open--; 
                result.push(s[i]);
            }
        } else {
            result.push(s[i]); 
        }
    }

    // Second pass: remove invalid opening parentheses
    let finalResult = [];
    let close = 0;
    let m = result.length;

    for (let i = m - 1; i >= 0; i--) {
        if (result[i] === ')') {
            close++;  
            finalResult.push(result[i]);
        } else if (result[i] === '(') {
            if (close > 0) {
                close--;  
                finalResult.push(result[i]);
            }
        } else {
            finalResult.push(result[i]);  
        }
    }

    return finalResult.reverse().join('');
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
    const result = minRemoveToMakeValid(input);

    // Append the result to output.txt instead of overwriting
    fs.appendFile('output.txt', JSON.stringify(result) + '\n', (err) => {
        if (err) {
            console.error('Error writing output file:', err);
        } else {
            console.log('Output written to output.txt');
        }
    });
});