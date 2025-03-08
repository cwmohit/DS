const fs = require('fs');

/*
## Maximal Rectangle

Given a rows x cols binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.

Example 1:
Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
Output: 6
Explanation: The maximal rectangle is shown in the above picture.

Example 2:
Input: matrix = [["0"]]
Output: 0

Example 3:
Input: matrix = [["1"]]
Output: 1
 
Constraints:
rows == matrix.length
cols == matrix[i].length
1 <= row, cols <= 200
matrix[i][j] is '0' or '1'.
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

var maximalRectangle = function(matrix) {
    let n = matrix.length;
    if (n === 0) return 0;
    
    let m = matrix[0].length;
    let heights = new Array(m).fill(0);
    let area = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            // Convert string to integer and update heights
            heights[j] = matrix[i][j] === "0" ? 0 : heights[j] + 1;
        }

        area = Math.max(area, largestRectangleArea(heights));
    }

    return area;
};


/*
 Explaination:
 step1: for each row, calculate heights
 step2: for each row, calculate largestRectangleArea by using largestRectangleArea
 step3: return the max area
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
    const input = JSON.parse(data.trim());

    // Call your function with the input data
    const result = maximalRectangle(input);

    // Append the result to output.txt instead of overwriting
    fs.appendFile('output.txt', JSON.stringify(result) + '\n', (err) => {
        if (err) {
            console.error('Error writing output file:', err);
        } else {
            console.log('Output written to output.txt');
        }
    });
});