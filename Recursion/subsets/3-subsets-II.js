/*

## Subsets II

Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

Example 1:
Input: nums = [1,2,2]
Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]

Example 2:
Input: nums = [0]
Output: [[],[0]]
 
Constraints:
1 <= nums.length <= 10
-10 <= nums[i] <= 10
*/

var subsetsWithDup = function(nums) {
    var res = [];
    nums.sort((a, b) => a - b); 
    
    function helper(nums, output, index) {
        if (index >= nums.length) {
            res.push([...output]);
            return;
        }

        helper(nums, output, index + 1);

        output.push(nums[index]);
        helper(nums, output, index + 1);
        output.pop();

        while (index + 1 < nums.length && nums[index] === nums[index + 1]) {
            index++;
        }
    }

    helper(nums, [], 0);
    return res;
};