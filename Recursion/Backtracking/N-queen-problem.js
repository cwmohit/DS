var solveNQueens = function (n) {
    let board = Array(n).fill('.').map(() => Array(n).fill('.'));
    let ans = [];

    function addSolution(board, ans, n) {
        let solution = [];
        for (let i = 0; i < n; i++) {
            solution.push(board[i].join(""));
        }
        ans.push(solution);
    }

    function isSafe(row, col, board, n) {
        let x = row;
        let y = col;

        // check for same row
        while (y >= 0) {
            if (board[x][y] === 'Q') {
                return false;
            }
            y--;
        }

        x = row;
        y = col;
        // check for upper left diagonal
        while (x >= 0 && y >= 0) {
            if (board[x][y] === 'Q') {
                return false;
            }
            x--;
            y--;
        }

        x = row;
        y = col;
        // check for upper right diagonal
        while (x < n && y >= 0) {
            if (board[x][y] === 'Q') {
                return false;
            }
            x++;
            y--;
        }

        return true;
    }

    function solve(col, ans, board, n) {
        if (col === n) {
            addSolution(board, ans, n);
            return;
        }

        for (let row = 0; row < n; row++) {
            if (isSafe(row, col, board, n)) {
                board[row][col] = 'Q';
                solve(col + 1, ans, board, n);
                board[row][col] = '.';
            }
        }
    }

    solve(0, ans, board, n);

    return ans;
};