const fs = require('fs');
const { customLog } = require('../utils');

/*
## Binary Subarrays With Sum

Given a binary array nums and an integer goal, return the number of non-empty subarrays with a sum goal.

A subarray is a contiguous part of the array.

Example 1:
Input: nums = [1,0,1,0,1], goal = 2
Output: 4
Explanation: The 4 subarrays are bolded and underlined below:
[1,0,1,0,1]
[1,0,1,0,1]
[1,0,1,0,1]
[1,0,1,0,1]

Example 2:
Input: nums = [0,0,0,0,0], goal = 0
Output: 15
 
Constraints:
1 <= nums.length <= 3 * 104
nums[i] is either 0 or 1.
0 <= goal <= nums.length
*/

var numSubarraysWithSum = function(nums, goal) {
    return atMostK(nums, goal) - atMostK(nums, goal - 1);
};

function atMostK(nums, k) {
    if (k < 0) return 0;
    
    let left = 0, sum = 0, count = 0;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];

        while (sum > k) {
            sum -= nums[left];
            left++;
        }

        count += right - left + 1;
    }
    
    return count;
}

// Example usage:
customLog(numSubarraysWithSum([1,0,1,0,1], 2)); // Output: 4 ([1,2,1,2])