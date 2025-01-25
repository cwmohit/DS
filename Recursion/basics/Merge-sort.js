const fs = require('fs');

/*
## Merge Sort problem

Problem:  Given an array of size n, sort the array using Merge Sort.

Examples:

Example 1:
Input: N=5, arr[]={4,2,1,6,7}
Output: 1,2,4,6,7,


Example 2:
Input: N=7,arr[]={3,2,8,5,1,4,23}
Output: 1,2,3,4,5,8,23
*/

function merge(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        }
        else {
            result.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }
  
    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}


function mergeSort(nums) {
    if(nums.length <= 1) return nums;

    let mid = Math.floor(nums.length / 2);
    let left = mergeSort(nums.slice(0, mid));
    let right = mergeSort(nums.slice(mid));

    return merge(left, right);
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

    const result = mergeSort(JSON.parse(data));

    // Append the result to output.txt instead of overwriting
    fs.appendFile('output.txt', result + '\n', (err) => {
        if (err) {
            console.error('Error writing output file:', err);
        } else {
            console.log('Output written to output.txt');
        }
    });
});