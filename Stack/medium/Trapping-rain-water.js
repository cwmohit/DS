const fs = require('fs');

/*
## Trapping Rain Water

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

Example 1:
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

Example 2:
Input: height = [4,2,0,3,2,5]
Output: 9
 
Constraints:
n == height.length
1 <= n <= 2 * 104
0 <= height[i] <= 105
*/

var trap = function(height) {
    let left = [], right = [], maxLeft = 0, maxRight = 0;

    for(let i=0;i<height.length;i++){
        maxLeft=Math.max(height[i], maxLeft);
        left.push(maxLeft);
    }  
    for(let i=height.length-1;i>=0;i--){
        maxRight=Math.max(height[i], maxRight);
        right.push(maxRight);
    }  

    right = right.reverse();

    const result = height.reduce((acc, curr, i) => {
            acc+= Math.min(left[i], right[i]) - height[i];
            return acc;
    }, 0);

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
    const result = trap(input);

    // Append the result to output.txt instead of overwriting
    fs.appendFile('output.txt', JSON.stringify(result) + '\n', (err) => {
        if (err) {
            console.error('Error writing output file:', err);
        } else {
            console.log('Output written to output.txt');
        }
    });
});