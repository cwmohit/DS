/*

## Floor and Ceil in Sorted Array

Problem Statement: You're given an sorted array arr of n integers and an integer x. Find the floor and ceiling of x in arr[0..n-1].
The floor of x is the largest element in the array which is smaller than or equal to x.
The ceiling of x is the smallest element in the array greater than or equal to x.

Pre-requisite: Lower Bound & Binary Search
Example 1:
Input Format: n = 6, arr[] ={3, 4, 4, 7, 8, 10}, x= 5
Result: 4 7
Explanation: The floor of 5 in the array is 4, and the ceiling of 5 in the array is 7.

Example 2:
Input Format: n = 6, arr[] ={3, 4, 4, 7, 8, 10}, x= 8
Result: 8 8
Explanation: The floor of 8 in the array is 8, and the ceiling of 8 in the array is also 8
*/


function findFloorAndCeil(nums, target) {
  let left = 0,
    right = nums.length - 1,
    lowerBoundIndex = nums.length;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] >= target) {
      lowerBoundIndex = mid; // Possible ceil
      right = mid - 1; // Search left
    } else {
      left = mid + 1; // Search right
    }
  }

  // Ceil is at lowerBoundIndex (if in range)
  let ceil = lowerBoundIndex < nums.length ? nums[lowerBoundIndex] : -1;

  // Floor is at lowerBoundIndex - 1 (if in range)
  let floor = lowerBoundIndex > 0 ? nums[lowerBoundIndex - 1] : -1;

  return { floor, ceil };
}

// Example Usage
console.log(findFloorAndCeil([1, 3, 5, 6], 4)); // { floor: 3, ceil: 5 }
console.log(findFloorAndCeil([1, 3, 5, 6], 6)); // { floor: 6, ceil: 6 }
console.log(findFloorAndCeil([1, 3, 5, 6], 7)); // { floor: 6, ceil: -1 }
console.log(findFloorAndCeil([1, 3, 5, 6], 0)); // { floor: -1, ceil: 1 }
