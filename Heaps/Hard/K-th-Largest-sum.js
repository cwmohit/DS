
const fs = require('fs');

/*

## K-th Largest sum

You are given an array arr. You have to find the K-th largest sum of contiguous subarray within the array elements. In other words, overall subarrays, find the subarray with kth largest sum and return its sum of elements.

Examples:

Input: arr[] = [3, 2, 1], k = 2 
Output: 5
Explanation: The different subarray sums we can get from the array are = [6, 5, 3, 2, 1]. Where 5 is the 2nd largest.
Input: arr[] = [2, 6, 4, 1], k = 3
Output: 11
Explanation: The different subarray sums we can get from the arrayare = [13, 12, 11, 10, 8, 6, 5, 4, 2, 1]. Where 11 is the 3rd largest.
Expected Time Complexity: O(n2 * log k)
Expected Auxiliary Space: O(k)

Constraints:
1 <= arr.size() <= 100
1 <= k <= (n*(n+1))/2
-105 <= arr[i] <= 105
*/

const { MinHeap } = require("../min-heap");

function kthLargestSum(arr, k) {
  let n = arr.length;
  let minHeap = new MinHeap();

  // Compute all possible subarray sums
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += arr[j];

      // Maintain a heap of size K
      if (minHeap.size() < k) {
        minHeap.push(sum);
      } else if (sum > minHeap.top()) {
        minHeap.pop();
        minHeap.push(sum);
      }
    }
  }

  return minHeap.top(); // K-th largest sum
}

// Example usage:
const arr = [10, -10, 20, -40];
const k = 3;
customLog(kthLargestSum(arr, k)); // Output: 10

function customLog(...message) {
    fs.appendFile('output.txt', JSON.stringify(message) + '\n', (err) => {
        if (err) {
            console.error('Error writing to output.txt:', err);
        }
    });
}
