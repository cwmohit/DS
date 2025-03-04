const fs = require('fs');

/*
## Reverse String problem
Write a function that takes a string as input and returns the string with all vowels removed.
*/

function ReverseString(n) {
    if(n.length === 0) return '';

    let current = n[0];
    let rest = n.slice(1);
    return ReverseString(rest) + current;
}




// Approach 2 (best)
function ReverseString(str, i = 0, j = str.length - 1) {
    if (i >= j) return str;
    
    const arr = str.split('');
    [arr[i], arr[j]] = [arr[j], arr[i]];
    
    return ReverseString(arr.join(''), i + 1, j - 1);
}

// Approach 3 (using single pointer)
function ReverseString(str, i = 0) {
    const j = str.length - 1 - i;
    if (i >= j) return str;
    
    const arr = str.split('');
    [arr[i], arr[j]] = [arr[j], arr[i]];
    
    return ReverseString(arr.join(''), i + 1);
}

console.log(ReverseString("hello")); // Output: "olleh"












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
    const result = ReverseString(data);

    // Append the result to output.txt instead of overwriting
    fs.appendFile('output.txt', result + '\n', (err) => {
        if (err) {
            console.error('Error writing output file:', err);
        } else {
            console.log('Output written to output.txt');
        }
    });
});
