const fs = require('fs');
const path = require('path');

/*
## Word Search

Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

 

Example 1:

Input: board = [["A","B","C","E"],
                ["S","F","C","S"],
                ["A","D","E","E"]], word = "ABCCED"
Output: true
Example 2:


Input: board = [["A","B","C","E"],
                ["S","F","C","S"],
                ["A","D","E","E"]], word = "SEE"
Output: true
Example 3:


Input: board = [["A","B","C","E"],
                ["S","F","C","S"],
                ["A","D","E","E"]], word = "ABCB"
Output: false
 

Constraints:

m == board.length
n = board[i].length
1 <= m, n <= 6
1 <= word.length <= 15
board and word consists of only lowercase and uppercase English letters.
 

Follow up: Could you use search pruning to make your solution faster with a larger board?
*/

var exist = function(board, word) {
    customLog(JSON.stringify({board, word}))
    const rows = board.length;
    const cols = board[0].length;

    function helper(i, j, charIndex) {
        // If all characters are matched, return true
        if (charIndex === word.length) return true;

        if (i < 0 || i >= rows || j < 0 || j >= cols || board[i][j] !== word[charIndex]) {
            return false;
        }

        const temp = board[i][j];
        board[i][j] = '#';

        const found =  helper(i + 1, j, charIndex + 1) || // down
            helper(i - 1, j, charIndex + 1) || // up
            helper(i, j + 1, charIndex + 1) || // right
            helper(i, j - 1, charIndex + 1);   // left

        board[i][j] = temp;

        return found;
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (helper(i, j, 0)) {
                return true;
            }
        }
    }

    return false;
};


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

    const input = data.trim().split('\n');
    const board = JSON.parse(input[0].split('=')[1].trim()); // Extract and parse the nums array
    const word = input[1].split('=')[1].trim(); // Extract and parse the target integer

    // Call your function with the input data
    const result = exist(board, word);

    // Append the result to output.txt instead of overwriting
    fs.appendFile('output.txt', result + '\n', (err) => {
        if (err) {
            console.error('Error writing output file:', err);
        } else {
            console.log('Output written to output.txt');
        }
    });
});