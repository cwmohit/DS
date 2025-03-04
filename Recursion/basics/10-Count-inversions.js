const fs = require('fs');

/*
## Count inversions problem using recursion

Given an integer array arr[] of size n, find the inversion count in the array. Two array elements arr[i] and arr[j] form an inversion if arr[i] > arr[j] and i < j.

Note: Inversion Count for an array indicates that how far (or close) the array is from being sorted. If the array is already sorted, then the inversion count is 0, but if the array is sorted in reverse order, the inversion count is maximum. Formally, the inversion count is the number of inversions present in the array.


Examples:
Input: arr[] = {4, 3, 2, 1}
Output: 6

Input: arr[] = {1, 2, 3, 4, 5}
Output: 0
Explanation: There is no pair of indexes (i, j) exists in the given array such that arr[i] > arr[j] and i < j

Input: arr[] = {10, 10, 10}
Output: 0
*/

function mergeAndCountInversions(left, right) {
    let merged = [];
    let i = 0;
    let j = 0;
    let inversions = 0;
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        merged.push(left[i]);
        i++;
      } else {
        merged.push(right[j]);
        j++;

        /*
           It means all the elements from the right side of left[i] in left (>left[i]) are greater right[j] 
           and it can pair
        */
        inversions += left.length - i;
      }
    }

    while (i < left.length) {
      merged.push(left[i]);
      i++;
    }

    while (j < right.length) {
      merged.push(right[j]);
      j++;
    }

    return [merged, inversions];
}

/*
 explain:
    [] = {4, 3, 2, 1}
    
    1. split the array into 2 halves
    left = {4, 3} and right = {2, 1}

    2. split the left array into 2 halves
    left = {4} and right = {3}

    3. merge the left and right arrays
    left = {3, 4}
    right = {2, 1}
    merged = {3, 4, 2, 1}
    inversions = 2
*/

function inversionCount(nums) {
    // Base case: If the array has 1 or 0 elements, it is already sorted
    if (nums.length <= 1) {
        return 0;
    }

    // Split the array into two halves
    const mid = Math.floor(nums.length / 2);
    const left = nums.slice(0, mid);
    const right = nums.slice(mid);
    const leftInversions = inversionCount(left);
    const rightInversions = inversionCount(right);
    const mergedInversions = mergeAndCountInversions(left, right);

    return leftInversions + rightInversions + mergedInversions[1];
}















// Custom logging function that writes to output.txt and moves to the next line
function customLog(message) {
    fs.appendFile('output.txt', message + '\n', (err) => {
        if (err) {
            console.error('Error writing to output.txt:', err);
        }
    });
}

// Read input from input.txt
fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading input file:', err);
        return;
    }

    const result = inversionCount(JSON.parse(data));

    // Append the result to output.txt instead of overwriting
    fs.appendFile('output.txt', result + '\n', (err) => {
        if (err) {
            console.error('Error writing output file:', err);
        } else {
            console.log('Output written to output.txt');
        }
    });
});
