const fs = require('fs');

/*
## Minimum in rotated sorted array

Problem Statement: Given an integer array arr of size N, sorted in ascending order (with distinct values). Now the array is rotated between 1 to N times which is unknown. Find the minimum element in the array. 

Examples
Example 1:
Input Format:
 arr = [4,5,6,7,0,1,2,3]
Result:
 0
Explanation:
 Here, the element 0 is the minimum element in the array.

Example 2:
Input Format:
 arr = [3,4,5,1,2]
Result:
 1
Explanation:
 Here, the element 1 is the minimum element in the array.

*/

function findMin(nums) {
    let left = 0;
    let right = nums.length - 1;
    // max integer value
    let ans = 2147483647;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        // left part is sorted
        if (nums[left] <= nums[mid]) {
            ans = Math.min(ans, nums[left]);
            left = mid + 1;
        } else { // right part is sorted
            right = mid - 1;
            ans = Math.min(ans, nums[mid]);
        }
    }

    return ans;
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

    // Call your function with the input data
    const input = data.trim().split('\n');
    const nums = JSON.parse(input[0].split('=')[1].trim()); 

    // Call your function with the input data
    const result = findMin(nums);

    // Append the result to output.txt instead of overwriting
    fs.appendFile('output.txt', JSON.stringify(result) + '\n', (err) => {
        if (err) {
            console.error('Error writing output file:', err);
        } else {
            console.log('Output written to output.txt');
        }
    });
});