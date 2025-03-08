const fs = require('fs');

/*
## Next smaller element

*/

var nextSmallerElements = function(nums) {
    let stack = [-1];
    let result = new Array(nums.length).fill(-1);
    for (let i = nums.length - 1; i >= 0; i--) {
        let current = nums[i];
        while(stack[stack.length - 1] >= current){
            stack.pop();
        }
        result[i] = stack[stack.length - 1];
        stack.push(current);
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
    const input = JSON.parse(data.trim());

    // Call your function with the input data
    const result = nextSmallerElements(input);

    // Append the result to output.txt instead of overwriting
    fs.appendFile('output.txt', JSON.stringify(result) + '\n', (err) => {
        if (err) {
            console.error('Error writing output file:', err);
        } else {
            console.log('Output written to output.txt');
        }
    });
});