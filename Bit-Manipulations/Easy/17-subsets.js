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

// Example usage:
console.log(subsets([1,2,3]));
// Output: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2,3]]