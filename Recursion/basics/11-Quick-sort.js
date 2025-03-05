const fs = require('fs');

/*
## Quick Sort problem using recursion

Problem Statement:  Given an array of n integers, sort the array using the Quicksort method.

Examples:

Example 1:
Input:  N = 5  , Arr[] = {4,1,7,9,3}
Output: 1 3 4 7 9 

Explanation: After sorting the array becomes 1, 3, 4, 7, 9

Example 2:
Input: N = 8 , Arr[] = {4,6,2,5,7,9,1,3}
Output: 1 2 3 4 5 6 7 9
Explanation: After sorting the array becomes 1, 3, 4, 7, 9
*/


function quickSort(nums) {
    if(nums.length <= 1) return nums;

    let pivot = nums[nums.length - 1];
    let left = [];
    let right = [];

    for(let i = 0; i < nums.length - 1; i++) {
        if(nums[i] < pivot) {
            left.push(nums[i]);
        } else {
            right.push(nums[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}


// Better space utilisation (recommended)
function quickSortInPlace(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        let pivotIndex = partition(arr, low, high);
        quickSortInPlace(arr, low, pivotIndex - 1);
        quickSortInPlace(arr, pivotIndex + 1, high);
    }
    return arr;
}

function partition(arr, low, high) {
    let pivot = arr[high];  // Pick the last element as the pivot
    let pivotIndex = low; // Start pivotIndex for swapping

    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            [arr[pivotIndex], arr[j]] = [arr[j], arr[pivotIndex]]; // Swap
            pivotIndex++; // Move pivotIndex forward
        }
    }

    // Swap pivot with the first element in the right partition
    [arr[pivotIndex], arr[high]] = [arr[high], arr[pivotIndex]];

    return pivotIndex; // Return pivot's new position
}

// Example usage:
let nums = [4, 2, 7, 1, 9, 3];
console.log(quickSortInPlace(nums));


/*
Time Complexity:
The time complexity of the quicksort algorithm is O(n log n) on average, assuming that th
e partition step is done in linear time. In the worst case, the time complexity is O(n^2) when the partition step is done in linear time.
*/














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

    const result = quickSort(JSON.parse(data));

    // Append the result to output.txt instead of overwriting
    fs.appendFile('output.txt', result + '\n', (err) => {
        if (err) {
            console.error('Error writing output file:', err);
        } else {
            console.log('Output written to output.txt');
        }
    });
});
