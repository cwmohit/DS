const fs = require('fs');

/*
## Book Allocation problem

Given an array arr[] and an integer k, where arr[i] denotes the number of pages of a book and k denotes total number of students. All the books need to be allocated to k students in contiguous manner, with each student getting at least one book.

The task is to minimize the maximum number of pages allocated to a student. If it is not possible to allocate books to all students, return -1.

Examples:
Input: arr[] = [12, 34, 67, 90], k = 2
Output: 113
Explanation: Books can be distributed in following ways:


[12] and [34, 67, 90] – The maximum pages assigned to a student is  34 + 67 + 90 = 191.
[12, 34] and [67, 90] – The maximum pages assigned to a student is 67 + 90 = 157.
[12, 34, 67] and [90] – The maximum pages assigned to a student is 12 + 34 + 67 = 113.
The third combination has the minimum pages assigned to a student which is 113.


Input: arr[] = [15, 17, 20], k = 5
Output: -1
Explanation: Since there are more students than total books, it’s impossible to allocate a book to each student.


Input: arr[] = [22, 23, 67], k = 1
Output: 112
Explanation: Since there is only 1 student, all books are assigned to that student. So, maximum pages assigned to a student is 22 + 23 + 67 = 112.
*/

function isPossible(nums, k, mid) {
    let students = 1;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        if(sum + nums[i] <= mid) {
            sum += nums[i];
        }else {
            students++;
            // If students required are more than given k, return false
            // If the number of pages in a book is more than mid, return false
            if (students > k || nums[i] > mid) {
                return false;
            }
            sum = nums[i];
        }
    }
    return true;
}

function findPages(nums, k) {
    if(k > nums.length) return -1;
    let left = Math.max(...nums);
    let right = nums.reduce((a, b) => a + b, 0);
    let ans = -1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (isPossible(nums, k, mid)) {
            ans = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return ans;
}


/*
Similar Question: Painters partition problem (to get minimum time to print board)

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
    const result = findPages(nums, k);

    // Append the result to output.txt instead of overwriting
    fs.appendFile('output.txt', JSON.stringify(result) + '\n', (err) => {
        if (err) {
            console.error('Error writing output file:', err);
        } else {
            console.log('Output written to output.txt');
        }
    });
});