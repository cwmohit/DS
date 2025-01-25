const fs = require('fs');

/*
## Two numbers with odd occurences

Given an unsorted array, Arr[] of size N and that contains even number of occurrences for all numbers except two numbers. Find the two numbers in decreasing order which has odd occurrences.

Example 1:
Input:
N = 8
Arr = {4, 2, 4, 5, 2, 3, 3, 1}
Output: {5, 1} 
Explanation: 5 and 1 have odd occurrences.

Example 2:
Input:
N = 8
Arr = {1 7 5 7 5 4 7 4}
Output: {7, 1}
Explanation: 7 and 1 have odd occurrences.

Your Task:
You don't need to read input or print anything. Your task is to complete the function twoOddNum() which takes the array Arr[] and its size N as input parameters and returns the two numbers in decreasing order which have odd occurrences.

Expected Time Complexity: O(N)
Expected Auxiliary Space: O(1)

Constraints:
2 ≤ N ≤ 106
1 ≤ Arri ≤ 1012
*/

function twoOddNum(Arr, N) {
    // Step 1: XOR all elements to find XOR of two odd-occurring numbers
    let xorAll = 0;
    for (let i = 0; i < N; i++) {
        xorAll ^= Arr[i];
    }

    // Step 2: Find the rightmost set bit in xorAll
    let rightmostSetBit = xorAll & -xorAll;

    // Step 3: Separate numbers into two groups based on the rightmost set bit
    let num1 = 0, num2 = 0;
    for (let i = 0; i < N; i++) {
        if (Arr[i] & rightmostSetBit) {
            num1 ^= Arr[i];
        } else {
            num2 ^= Arr[i];
        }
    }

    // Return the two numbers in decreasing order
    return num1 > num2 ? [num1, num2] : [num2, num1];
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

    // Call your function with the input data
    const input = data.trim().split('\n');
    const arr = JSON.parse(input[0].split('=')[1].trim()); 
    const n = parseInt(input[1].split('=')[1].trim());

    // Call your function with the input data
    const result = twoOddNum(arr, n);

    // Append the result to output.txt instead of overwriting
    fs.appendFile('output.txt', JSON.stringify(result) + '\n', (err) => {
        if (err) {
            console.error('Error writing output file:', err);
        } else {
            console.log('Output written to output.txt');
        }
    });
});

/*
 6 - 0110
 7 - 0111

 15 - 01111
 16 - 10000



*/