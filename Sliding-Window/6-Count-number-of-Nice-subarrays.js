const fs = require('fs');
const { customLog } = require('../utils');

/*
## Count Number of Nice Subarrays

Given an array of integers nums and an integer k. A continuous subarray is called nice if there are k odd numbers on it.

Return the number of nice sub-arrays.

Example 1:
Input: nums = [1,1,2,1,1], k = 3
Output: 2
Explanation: The only sub-arrays with 3 odd numbers are [1,1,2,1] and [1,2,1,1].

Example 2:
Input: nums = [2,4,6], k = 1
Output: 0
Explanation: There are no odd numbers in the array.

Example 3:
Input: nums = [2,2,2,1,2,2,1,2,2,2], k = 2
Output: 16
 
Constraints:
1 <= nums.length <= 50000
1 <= nums[i] <= 10^5
1 <= k <= nums.length
*/

var numberOfSubarrays = function(nums, k) {
    return atMostK(nums,k) - atMostK(nums, k-1);
};

function atMostK(nums, k) {
    let odd = 0;
    let left = 0, result = 0;
    
    for (let right = 0; right < nums.length; right++) {
        if(nums[right]%2 !== 0) odd++;
    
        while (odd > k) {
            if(nums[left]%2 !== 0) odd--;
            left++;
        }
        
        result += right - left + 1;
    }
    
    return result;
}

// Example usage:
customLog(numberOfSubarrays([1,1,2,1,1], 3));





// Approach 2
var numberOfSubarrays = function(nums, k) {
    return numSubarraysWithSum(nums, k);
};

// Binary subarray with sum
var numSubarraysWithSum = function(nums, goal) {
    return atMostK(nums, goal) - atMostK(nums, goal - 1);
};

function atMostK(nums, k) {
    if (k < 0) return 0;
    
    let left = 0, sum = 0, count = 0;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right] % 2; // Increment sum only for odd numbers

        while (sum > k) {
            sum -= nums[left] % 2; // Decrement sum correctly
            left++;
        }

        count += right - left + 1;
    }
    
    return count;
}