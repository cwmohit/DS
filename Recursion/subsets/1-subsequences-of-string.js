const fs = require('fs');

/*
## Print all subsequences of a string

Given a string, print all subsequences of the string.
 example:
 input: "abc"
 output: "a", "b", "c", "ab", "ac", "bc", "abc"

 input: "ab"
 output: "a", "b", "ab"
*/

function subsequences(s) {
    var res = [];
    
    function helper(s, output, index) {
        if(index >= s.length) {
            if(output.length > 0) res.push(output.join(''));
            return;
        }

        helper(s, output, index + 1); // exclude the character at index
        output.push(s[index]);
        helper(s, output, index + 1); // include the character at index
        output.pop();
    }

    helper(s, [], 0);
    return res.sort().join(', ');
}

/*
 TC: Recursive call without including the character at index: O(2^(n))
 Explanation:
  input: "ab"

  Two recursive calls are made for each character in the string.
  helper("ab", [], 0);  
    1. helper("ab", [], 1);
        helper("ab", [], 2);
        helper("ab", [b], 2); // output: "b"
    2. helper("ab", [a], 1);
        helper("ab", [a], 2); // output: "a"
        helper("ab", [a, b], 2); // output: "ab"
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
    const result = subsequences(data);

    // Append the result to output.txt instead of overwriting
    fs.appendFile('output.txt', result + '\n', (err) => {
        if (err) {
            console.error('Error writing output file:', err);
        } else {
            console.log('Output written to output.txt');
        }
    });
});
