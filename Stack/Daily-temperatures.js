const fs = require('fs');

/*
## Daily Temperatures

Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

Example 1:
Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]

Example 2:
Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]
Example 3:

Input: temperatures = [30,60,90]
Output: [1,1,0]
 
Constraints:
1 <= temperatures.length <= 105
30 <= temperatures[i] <= 100

*/

var dailyTemperatures = function(temperatures) {
    let n = temperatures.length;
    let result = new Array(n).fill(0);
    let stack = []; // Monotonic decreasing stack

    for (let i = n - 1; i >= 0; i--) {
        while (stack.length > 0 && temperatures[i] >= temperatures[stack[stack.length - 1]]) {
            stack.pop();
        }
        
        if (stack.length > 0) {
            result[i] = stack[stack.length - 1] - i; // days
        }
        
        stack.push(i);
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
    const result = dailyTemperatures(input);

    // Append the result to output.txt instead of overwriting
    fs.appendFile('output.txt', JSON.stringify(result) + '\n', (err) => {
        if (err) {
            console.error('Error writing output file:', err);
        } else {
            console.log('Output written to output.txt');
        }
    });
});