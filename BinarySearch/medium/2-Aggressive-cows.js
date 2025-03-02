const fs = require('fs');

/*
## Aggressive cows problem

You are given an array with unique elements of stalls[], which denote the position of a stall. You are also given an integer k which denotes the number of aggressive cows. Your task is to assign stalls to k cows such that the minimum distance between any two of them is the maximum possible.

Examples :
Input: stalls[] = [1, 2, 4, 8, 9], k = 3
Output: 3
Explanation: The first cow can be placed at stalls[0], 
the second cow can be placed at stalls[2] and 
the third cow can be placed at stalls[3]. 
The minimum distance between cows, in this case, is 3, which also is the largest among all possible ways.

Input: stalls[] = [10, 1, 2, 7, 5], k = 3
Output: 4
Explanation: The first cow can be placed at stalls[0],
the second cow can be placed at stalls[1] and
the third cow can be placed at stalls[4].
The minimum distance between cows, in this case, is 4, which also is the largest among all possible ways.

Input: stalls[] = [2, 12, 11, 3, 26, 7], k = 5
Output: 1
Explanation: Each cow can be placed in any of the stalls, as the no. of stalls are exactly equal to the number of cows.
The minimum distance between cows, in this case, is 1, which also is the largest among all possible ways.

Constraints:
2 <= stalls.size() <= 106
0 <= stalls[i] <= 108
1 <= k <= stalls.size()
*/

function isPossible(nums, mid, k) {
    let cows = 1;
    let prev = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] - prev >= mid) {
            cows++;
            if (cows === k) {
                return true;
            }
            prev = nums[i];
        }
    }
    return false;
}

function aggressiveCows(nums, k) {
    nums.sort((a, b) => a - b);
    let left = 1;
    let right = Math.max(...nums);
    let ans = -1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (isPossible(nums, mid, k)) {
            ans = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return ans;
}


/*
Homework:
EKO SPOJ: https://www.spoj.com/problems/EKO/  
PRATA SPOJ: https://bit.ly/3ExHXt5  
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
    const nums = JSON.parse(input[0].split('=')[1].trim()); 
    const k = parseInt(input[1].split('=')[1].trim());

    // Call your function with the input data
    const result = aggressiveCows(nums, k);

    // Append the result to output.txt instead of overwriting
    fs.appendFile('output.txt', JSON.stringify(result) + '\n', (err) => {
        if (err) {
            console.error('Error writing output file:', err);
        } else {
            console.log('Output written to output.txt');
        }
    });
});