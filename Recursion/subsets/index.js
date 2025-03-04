const fs = require('fs');

/*
## Subsets Problem

Given an integer array nums of unique elements, return all possible 
subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
Example 2:

Input: nums = [0]
Output: [[],[0]]
 
Constraints:

1 <= nums.length <= 10
-10 <= nums[i] <= 10
All the numbers of nums are unique.
*/

// TC: Recursive call without including the character at index: O(2^(n))

function subsets(nums) {
    var res = [];
    
    function helper(nums, output, index) {
        if (index >= nums.length) {
            res.push([...output]);
            return;
        }

        helper(nums, output, index + 1);

        output.push(nums[index]);
        helper(nums, output, index + 1);
        output.pop();
    }

    helper(nums, [], 0);
    return res;
}




// Approach 2, TC: (2^(n))
function subsets(nums) {
    let result = [];
    let n = nums.length;
    
    for (let i = 0; i < (1 << n); i++) { // Iterate from 0 to 2^n - 1
        let subset = [];
        for (let j = 0; j < n; j++) {
            if (i & (1 << j)) { // Check if the j-th bit is set
                subset.push(nums[j]);
            }
        }
        result.push(subset);
    }
    
    return result;
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

    const result = subsets(JSON.parse(data));

    // Append the result to output.txt instead of overwriting
    fs.appendFile('output.txt', result + '\n', (err) => {
        if (err) {
            console.error('Error writing output file:', err);
        } else {
            console.log('Output written to output.txt');
        }
    });
});
