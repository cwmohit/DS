const fs = require('fs');

/*
## Next Greater Element II

Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]), return the next greater number for every element in nums.

The next greater number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, return -1 for this number.

Example 1:
Input: nums = [1,2,1]
Output: [2,-1,2]
Explanation: The first 1's next greater number is 2; 
The number 2 can't find next greater number. 
The second 1's next greater number needs to search circularly, which is also 2.

Example 2:
Input: nums = [1,2,3,4,3]
Output: [2,3,4,-1,4]
 
Constraints:
1 <= nums.length <= 104
-109 <= nums[i] <= 109
*/

var nextGreaterElements = function(nums) {
    const n = nums.length;
    const st = [];
    const ans = new Array(n).fill(-1);
    for(let i = n * 2 - 1; i >= 0; i--) {
        while(st.length && st[st.length - 1] <= nums[i % n]) {
            st.pop();
        }
        if(i < n) {
            ans[i] = st.length ? st[st.length - 1] : -1;
        }
        st.push(nums[i % n]);
    }
    return ans;  
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
    const result = nextGreaterElements(input);

    // Append the result to output.txt instead of overwriting
    fs.appendFile('output.txt', JSON.stringify(result) + '\n', (err) => {
        if (err) {
            console.error('Error writing output file:', err);
        } else {
            console.log('Output written to output.txt');
        }
    });
});