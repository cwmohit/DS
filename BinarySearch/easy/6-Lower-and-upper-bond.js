const fs = require("fs");

/*
## Implement Lower Bound

Problem Statement: Given a sorted array of N integers and an integer x, write a program to find the lower bound of x.

Examples
Example 1:
Input Format:
 N = 4, arr[] = {1,2,2,3}, x = 2
Result:
 1
Explanation:
 Index 1 is the smallest index such that arr[1] >= x.

Example 2:
Input Format:
 N = 5, arr[] = {3,5,8,15,19}, x = 9
Result:
 3
Explanation:
 Index 3 is the smallest index such that arr[3] >= x.
*/

function searchLowerBond(nums, target) {
  let left = 0,
    ans = nums.length;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] >= target) {
      right = mid - 1;
      ans = mid;
    } else {
      left = mid + 1;
    }
  }
  return ans;
}

function searchUpperBond(nums, target) {
  let left = 0,
    ans = nums.length;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid - 1;
      ans = mid;
    }
  }
  return ans;
}

// Custom logging function that writes to output.txt and moves to the next line
function customLog(message) {
  fs.appendFile("output.txt", message + "\n", (err) => {
    if (err) {
      console.error("Error writing to output.txt:", err);
    }
  });
}

// Read input from input.txt
fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading input file:", err);
    return;
  }

  // Call your function with the input data
  const input = data.trim().split("\n");
  const nums = JSON.parse(input[0].split("=")[1].trim());
  const target = parseInt(input[1].split("=")[1].trim());

  // Call your function with the input data
  const result1 = searchLowerBond(nums, target);
  const result2 = searchUpperBond(nums, target);

  // Append the result to output.txt instead of overwriting
  fs.appendFile("output.txt", JSON.stringify({result1, result2}) + "\n", (err) => {
    if (err) {
      console.error("Error writing output file:", err);
    } else {
      console.log("Output written to output.txt");
    }
  });
});
