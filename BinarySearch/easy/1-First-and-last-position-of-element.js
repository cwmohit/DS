const fs = require('fs');

/*
## First and Last Position of Element in Sorted Array

Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

Array can contain duplicates.
If target is not found in the array, return [-1, -1].

example 1:
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

example 2:
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
*/

function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let first = -1;
    let last = -1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) {
        first = mid;
        right = mid - 1;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    
    left = 0;
    right = nums.length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) {
        last = mid;
        left = mid + 1;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return [first, last];
}


/*
 Similar questions: Find total number of occurances
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
    const input = data.trim().split('\n');
    const nums = JSON.parse(input[0].split('=')[1].trim()); 
    const target = parseInt(input[1].split('=')[1].trim());

    // Call your function with the input data
    const result = search(nums, target);

    // Append the result to output.txt instead of overwriting
    fs.appendFile('output.txt', JSON.stringify(result) + '\n', (err) => {
        if (err) {
            console.error('Error writing output file:', err);
        } else {
            console.log('Output written to output.txt');
        }
    });
});