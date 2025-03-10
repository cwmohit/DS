const fs = require('fs');
const { customLog } = require('../utils');

/*
## Subarrays with K Different Integers

Given an integer array nums and an integer k, return the number of good subarrays of nums.

A good array is an array where the number of different integers in that array is exactly k.

For example, [1,2,3,1,2] has 3 different integers: 1, 2, and 3.
A subarray is a contiguous part of an array.

Example 1:
Input: nums = [1,2,1,2,3], k = 2
Output: 7
Explanation: Subarrays formed with exactly 2 different integers: [1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2]
Example 2:

Input: nums = [1,2,1,3,4], k = 3
Output: 3
Explanation: Subarrays formed with exactly 3 different integers: [1,2,1,3], [2,1,3], [1,3,4].
 
Constraints:
1 <= nums.length <= 2 * 104
1 <= nums[i], k <= nums.length
*/

var subarraysWithKDistinct = function(nums, k) {
    return atMostK(nums, k) - atMostK(nums, k - 1);
};

function atMostK(nums, k) {
    let count = new Map();
    let left = 0, result = 0;
    
    for (let right = 0; right < nums.length; right++) {
        count.set(nums[right], (count.get(nums[right]) || 0) + 1);
        
        while (count.size > k) {
            count.set(nums[left], count.get(nums[left]) - 1);
            if (count.get(nums[left]) === 0) count.delete(nums[left]);
            left++;
        }
        
        result += right - left + 1;
    }
    
    return result;
}

// Example usage:
customLog(subarraysWithKDistinct([1,2,1,2,3], 2)); // Output: 4 ([1,2,1,2])