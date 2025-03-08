const fs = require('fs');

/*
## Largest Rectangle in Histogram

Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

Example 1:
Input: heights = [2,1,5,6,2,3]
Output: 10
Explanation: The above is a histogram where width of each bar is 1.
The largest rectangle is shown in the red area, which has an area = 10 units.

Example 2:
Input: heights = [2,4]
Output: 4
*/

function nextSmallerElement(nums, n){
    let stack = [-1];
    let result = new Array(n).fill(-1);
    for (let i = n-1; i >= 0; i--) {
        let current = nums[i];
        while(stack[stack.length - 1] !== -1 && nums[stack[stack.length - 1]] >= current){
            stack.pop();
        }
        result[i] = stack[stack.length - 1];
        stack.push(i);
    }
    return result;
}

function prevSmallerElement(nums, n){
    let stack = [-1];
    let result = new Array(n).fill(-1);
    for (let i = 0; i < n; i++) {
        let current = nums[i];
        while(stack[stack.length - 1] !== -1 && nums[stack[stack.length - 1]] >= current){
            stack.pop();
        }
        result[i] = stack[stack.length - 1];
        stack.push(i);
    }
    return result;
}

var largestRectangleArea = function(heights) {
    let n = heights.length;

    let next = nextSmallerElement(heights, n);
    let prev = prevSmallerElement(heights, n);

    let max = -Infinity;

    for(let i=0; i<n; i++){
        let l = heights[i];
        if(next[i] == -1){
            next[i] = n;
        }

        let b = next[i] - prev[i] - 1;

        max = Math.max(l*b, max);
    }

    return max;
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
    const result = largestRectangleArea(input);

    // Append the result to output.txt instead of overwriting
    fs.appendFile('output.txt', JSON.stringify(result) + '\n', (err) => {
        if (err) {
            console.error('Error writing output file:', err);
        } else {
            console.log('Output written to output.txt');
        }
    });
});