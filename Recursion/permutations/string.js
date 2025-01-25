const fs = require('fs');

/*
## Permutations of given String

Given a string s, the task is to return all permutations of a given string in lexicographically sorted order.

Note: A permutation is the rearrangement of all the elements of a string. Duplicate arrangement can exist.

Examples:

Input:  s = “ABC”
Output: “ABC”, “ACB”, “BAC”, “BCA”, “CBA”, “CAB”


Input: s = “XY”
Output: “XY”, “YX”


Input: s = “AAA”
Output: “AAA”, “AAA”, “AAA”, “AAA”, “AAA”, “AAA” 
*/

function recurPermute(s) {
   let ans = [];
   let index = 0;

   function swap(s, i, j) {
     let arr = s.split("");
     let temp = arr[i];
     arr[i] = arr[j];
     arr[j] = temp;
     return arr.join("");
   }

   function solve(s, ans, index) {
        if (index >= s.length) {
            ans.push(s);
            return;
        }

        for (let i = index; i < s.length; i++) {
            s = swap(s, index, i);
            solve(s, ans, index + 1);
            s = swap(s, index, i);
        }
   }

   solve(s, ans, index);

   return ans;
}

/*
## Permutations of Array

Given an array nums of distinct integers, return all the possible 
permutations
. You can return the answer in any order.

Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
Example 2:

Input: nums = [0,1]
Output: [[0,1],[1,0]]
Example 3:

Input: nums = [1]
Output: [[1]]
*/

function permute(nums) {
    if (nums.length === 1) return [nums];
    let ans = [];
    let index = 0;
    function solve(nums, ans, index) {
        if (index >= nums.length) {
            ans.push([...nums]);
            return;
        }

        for (let i = index; i < nums.length; i++) {
            [nums[i], nums[index]] = [nums[index], nums[i]];
            solve(nums, ans, index + 1);
            [nums[i], nums[index]] = [nums[index], nums[i]];
        }
    }
    solve(nums, ans, index);
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
    const result = recurPermute(data);

    // Append the result to output.txt instead of overwriting
    fs.appendFile('output.txt', result + '\n', (err) => {
        if (err) {
            console.error('Error writing output file:', err);
        } else {
            console.log('Output written to output.txt');
        }
    });
});
