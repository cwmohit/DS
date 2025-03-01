const fs = require('fs');

/*
## Find XOR of numbers from L to R

Find XOR of numbers from L to R.
Difficulty: EasyAccuracy: 50.0%Submissions: 48K+Points: 2
You are given two integers L and R, your task is to find the XOR of elements of the range [L, R].

Example:

Input: 
L = 4, R = 8 
Output:
8 
Explanation:
4 ^ 5 ^ 6 ^ 7 ^ 8 = 8
Your Task:

Your task is to complete the function findXOR() which takes two integers l and r and returns the XOR of numbers from l to r.

Expected Time Complexity: O(1).

Expected Auxiliary Space: O(1).

Constraints:
1<=l<=r<=109
*/

function findXOR(l, r) {
    let ans = 0;
    function xorUpto(n) {
        switch(n % 4) {
            case 0: return n;
            case 1: return 1;
            case 2: return n + 1;
            case 3: return 0;
        }
    }

    return xorUpto(r) ^ xorUpto(l - 1);
}




/*
 let rightmostSetBit = xorAll & -xorAll;
 example: 6 - 0110
 6 & -6 = 0110 & 1010 = 0010

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

    // Call your function with the input data
    const input = data.trim().split('\n');
    const l = parseInt(input[0].split('=')[1].trim()); 
    const r = parseInt(input[1].split('=')[1].trim());

    // Call your function with the input data
    const result = findXOR(l, r);

    // Append the result to output.txt instead of overwriting
    fs.appendFile('output.txt', result + '\n', (err) => {
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