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


// Approach 2
var numSubarraysWithSum = function(nums, goal) {
    let n = nums.length;
    let map = new Map();
    let result = 0;
    let sum = 0;
    map.set(0, 1);
    for(let i=0;i<nums.length;i++){
        sum += nums[i];
        let remainingSum = sum - goal;
        if(map.has(remainingSum)){
            result += map.get(remainingSum);
        }
        map.set(sum, (map.get(sum) || 0) + 1);
    }
    return result;
};


// Approach 3
var numSubarraysWithSum = function(nums, goal) {
    let n = nums.length;

    let i = 0;
    let j = 0;
    let result = 0;

    let windowSum = 0;
    let countZeros = 0;

    while(j<n){
        windowSum += nums[j];
        while(i < j && (nums[i] === 0 || windowSum > goal)){
            if(nums[i] === 0) countZeros++;
            else countZeros = 0;

            windowSum -= nums[i];
            i++;
        }

        if(windowSum === goal){
            result+=1+countZeros;
        }

        j++;
    }

    return result;
};

/*
Pseudocode explain
1. Initialize two pointers i and j to 0.

2. Initialize a variable windowSum to 0.

3. Initialize a variable countZeros to 0.

4. While j is less than n:
a. Add the value at index j to windowSum.
b. While i is less than j and either the value at index i is 0 or window 
sum is greater than goal:
i. Subtract the value at index i from windowSum.
ii. Increment i.
iii. If the value at index i is 0, increment countZeros.
iv. If the value at index i is not 0, set countZeros to 0
c. If windowSum is equal to goal, add 1 + countZeros to result.
d. Increment j.
5. Return result.
*/

// Example usage:
customLog(numSubarraysWithSum([1,0,1,0,1], 2)); // Output: 4 ([1,2,1,2])





