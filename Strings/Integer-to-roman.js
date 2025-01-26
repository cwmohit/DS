const fs = require('fs');

/*
## Integer to Roman

https://leetcode.com/problems/integer-to-roman/description/
*/

var intToRoman = function(num) {
    // we have the values and symbols in our question
    let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let sym = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    let result = '';

    for(let i=0;i<values.length;i++){
        if(num === 0) break;
        times = Math.floor(num/values[i]);
        while(times--){
            result+=sym[i];
        }

        num = num%values[i];
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
    const input = data.trim().split('\n');
    const n = parseInt(input[0].split('=')[1].trim()); 

    // Call your function with the input data
    const result = intToRoman(n);

    // Append the result to output.txt instead of overwriting
    fs.appendFile('output.txt', JSON.stringify(result) + '\n', (err) => {
        if (err) {
            console.error('Error writing output file:', err);
        } else {
            console.log('Output written to output.txt');
        }
    });
});