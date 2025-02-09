const fs = require('fs');
const { customLog } = require('../utils');

/*
## Find length of the longest subarray containing atmost two distinct integers

Given an array arr[] containing positive elements, the task is to find the length of the longest subarray of an input array containing at most two distinct integers.

Examples:
Input: arr[]= [2, 1, 2]
Output: 3
Explanation: The entire array [2, 1, 2] contains at most two distinct integers (2 and 1). Hence, the length of the longest subarray is 3.

Input: arr[] = [3, 1, 2, 2, 2, 2]
Output: 5
Explanation: The longest subarray containing at most two distinct integers is [1, 2, 2, 2, 2], which has a length of 5. The subarray starts at the second element 1 and ends at the last element. It contains at most two distinct integers (1 and 2).

Constraints:
1 ≤ arr.size() ≤ 105
1 ≤ arr[i] <=105
*/

var longestSubarrayWithTwoDistinct = function(nums) {
    let left = 0, maxLen = 0;
    let count = new Map();

    for (let right = 0; right < nums.length; right++) {
        count.set(nums[right], (count.get(nums[right]) || 0) + 1);

        while (count.size > 2) {
            count.set(nums[left], count.get(nums[left]) - 1);
            if (count.get(nums[left]) === 0) count.delete(nums[left]);
            left++;
        }

        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
};

// Example usage:
customLog(longestSubarrayWithTwoDistinct([1, 2, 1, 2, 3])); // Output: 4 ([1,2,1,2])
customLog(longestSubarrayWithTwoDistinct([4, 4, 2, 2, 3, 3, 3])); // Output: 5 ([2,2,3,3,3])
customLog(longestSubarrayWithTwoDistinct([1, 2, 3, 4, 5])); // Output: 2 ([1,2] or [2,3] or [3,4] etc.)