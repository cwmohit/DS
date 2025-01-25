const fs = require('fs');

/*
## Binary search problem

Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
*/

function search(nums, target, start, end) {
    if(start > end) return -1;
    
    let mid = Math.floor((start + end) / 2);
    
    if(nums[mid] === target) return mid;
    
    if(nums[mid] > target) return search(nums, target, start, mid - 1);
    
    return search(nums, target, mid + 1, end);
}


function searchTarget(nums, target) {
    return search(nums, target, 0, nums.length - 1);
}















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

    const input = data.trim().split('\n');
    const nums = JSON.parse(input[0].split('=')[1].trim()); // Extract and parse the nums array
    const target = parseInt(input[1].split('=')[1].trim()); // Extract and parse the target integer

    // Call your function with the input data
    const result = searchTarget(nums, target);

    // Append the result to output.txt instead of overwriting
    fs.appendFile('output.txt', result + '\n', (err) => {
        if (err) {
            console.error('Error writing output file:', err);
        } else {
            console.log('Output written to output.txt');
        }
    });
});
