const fs = require('fs');
const path = require('path');

/*
## Rat in a Maze Problem - I using recursion

Consider a rat placed at position (0, 0) in an n x n square matrix mat. The rat's goal is to reach the destination at position (n-1, n-1). The rat can move in four possible directions: 'U'(up), 'D'(down), 'L' (left), 'R' (right).

The matrix contains only two possible values:

0: A blocked cell through which the rat cannot travel.
1: A free cell that the rat can pass through.
Note: In a path, no cell can be visited more than one time. If the source cell is 0, the rat cannot move to any other cell. In case of no path, return an empty list.+

The task is to find all possible paths the rat can take to reach the destination, starting from (0, 0) and ending at (n-1, n-1), under the condition that the rat cannot revisit any cell along the same path. Furthermore, the rat can only move to adjacent cells that are within the bounds of the matrix and not blocked.

Examples:

Input: mat[][] = [[1, 0, 0, 0], 
                  [1, 1, 0, 1], 
                  [1, 1, 0, 0], 
                  [0, 1, 1, 1]]

Output: ["DDRDRR", "DRDDRR"]
Explanation: The rat can reach the destination at (3, 3) from (0, 0) by two paths - DRDDRR and DDRDRR, when printed in sorted order we get DDRDRR DRDDRR.

Input: mat[][] = [[1, 0], 
                  [1, 0]]

Output: []
Explanation: No path exists and the destination cell is blocked.


Input: mat = [[1, 1, 1], 
              [1, 0, 1], 
              [1, 1, 1]]
Output: ["DDRR", "RRDD"]
Explanation: The rat has two possible paths to reach the destination: 1. "DDRR" 2. "RRDD", These are returned in lexicographically sorted order.
*/

function findPath(m) {
    const n = m.length;
    const visited = Array.from({ length: n }, () => new Array(n).fill(false));
    let path = [];
    let result = [];

    function isSafe(x, y, n, visited, m) {
        return (x >= 0 && x < n) && (y >= 0 && y < n) && (!visited[x][y] && m[x][y]);
    }

    function solve(m, n, result, x, y, visited, path) {
        if (x === n - 1 && y === n - 1) {
            result.push([...path].join('')); // Push a copy of the path
            return;
        }

        visited[x][y] = true;

        // 4 choices: D, L, R, U
        // down
        let newx = x + 1, newy = y;
        if (isSafe(newx, newy, n, visited, m)) {
            path.push('D');
            solve(m, n, result, newx, newy, visited, path);
            path.pop();
        }

        // left
        newx = x;
        newy = y - 1;
        if (isSafe(newx, newy, n, visited, m)) {
            path.push('L');
            solve(m, n, result, newx, newy, visited, path);
            path.pop();
        }

        // right
        newx = x;
        newy = y + 1;
        if (isSafe(newx, newy, n, visited, m)) {
            path.push('R');
            solve(m, n, result, newx, newy, visited, path);
            path.pop();
        }

        // up
        newx = x - 1;
        newy = y;
        if (isSafe(newx, newy, n, visited, m)) {
            path.push('U');
            solve(m, n, result, newx, newy, visited, path);
            path.pop();
        }

        visited[x][y] = false;
    }

    // Early return if start or end is blocked
    if (m[0][0] === 0 || m[n - 1][n - 1] === 0) {
        return [];
    }

    solve(m, n, result, 0, 0, visited, path);

    return result;
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
    const result = findPath(JSON.parse(data));

    // Append the result to output.txt instead of overwriting
    fs.appendFile('output.txt', JSON.stringify(result) + '\n', (err) => {
        if (err) {
            console.error('Error writing output file:', err);
        } else {
            console.log('Output written to output.txt');
        }
    });
});
