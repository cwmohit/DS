const fs = require('fs');

/*
## Sum of Subarray Minimums

Given an array of integers arr, find the sum of min(b), where b ranges over every (contiguous) subarray of arr. Since the answer may be large, return the answer modulo 109 + 7.

Example 1:
Input: arr = [3,1,2,4]
Output: 17
Explanation: 
Subarrays are [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4]. 
Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1.
Sum is 17.

Example 2:
Input: arr = [11,81,94,43,3]
Output: 444
 
Constraints:
1 <= arr.length <= 3 * 104
1 <= arr[i] <= 3 * 104
*/

var sumSubarrayMins = function(arr) {
    const MOD = 1e9 + 7;
    const n = arr.length;
    
    const left = getNSL(arr);
    const right = getNSR(arr);
    
    let result = 0;
    for (let i = 0; i < n; i++) {
        let ls = i - left[i];
        let rs = right[i] - i;
        let totalWays = ls * rs;
        // arr[i] * totalWays, arr[i] will be minimum in all todayways, will add minimum totalWays times in ans
        result = (result + (arr[i] * totalWays) % MOD) % MOD;
    }
    
    return result;
};

function getNSL(arr) {
    let stack = [];
    let left = new Array(arr.length);
    
    for (let i = 0; i < arr.length; i++) {
        while (stack.length && arr[stack[stack.length - 1]] >= arr[i]) {
            stack.pop();
        }
        left[i] = stack.length ? stack[stack.length - 1] : -1;
        stack.push(i);
    }
    
    return left;
}

function getNSR(arr) {
    let stack = [];
    let right = new Array(arr.length);
    
    for (let i = arr.length - 1; i >= 0; i--) {
        while (stack.length && arr[stack[stack.length - 1]] > arr[i]) {
            stack.pop();
        }
        right[i] = stack.length ? stack[stack.length - 1] : arr.length;
        stack.push(i);
    }
    
    return right;
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
    const input = JSON.parse(data.trim());

    // Call your function with the input data
    const result = sumSubarrayMins(input);

    // Append the result to output.txt instead of overwriting
    fs.appendFile('output.txt', JSON.stringify(result) + '\n', (err) => {
        if (err) {
            console.error('Error writing output file:', err);
        } else {
            console.log('Output written to output.txt');
        }
    });
});