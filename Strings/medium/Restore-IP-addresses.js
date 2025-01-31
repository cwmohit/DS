const fs = require('fs');

/*
## Restore IP Addresses

A valid IP address consists of exactly four integers separated by single dots. Each integer is between 0 and 255 (inclusive) and cannot have leading zeros.

For example, "0.1.2.201" and "192.168.1.1" are valid IP addresses, but "0.011.255.245", "192.168.1.312" and "192.168@1.1" are invalid IP addresses.
Given a string s containing only digits, return all possible valid IP addresses that can be formed by inserting dots into s. You are not allowed to reorder or remove any digits in s. You may return the valid IP addresses in any order.

Example 1:
Input: s = "25525511135"
Output: ["255.255.11.135","255.255.111.35"]

Example 2:
Input: s = "0000"
Output: ["0.0.0.0"]

Example 3:
Input: s = "101023"
Output: ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
 
Constraints:
1 <= s.length <= 20
s consists of digits only.
*/

var restoreIpAddresses = function(s) {
    let n = s.length;
    if (n > 12) return []; 

    let result = [];

    function isValid(str) {
        if (str.length > 1 && str[0] === '0') return false; 
        let val = parseInt(str, 10); 
        if (val > 255) return false; 
        return true;
    }

    function solve(idx, parts, current) {
        if (idx === n && parts === 4) {
            result.push(current.slice(0, -1));
            return;
        }

        if (parts > 4 || idx >= n) return;

        // Trying forming parts of length 1, 2, and 3 if valid.
        for (let len = 1; len <= 3; len++) {
            if (idx + len > n) break;
            let part = s.substr(idx, len);
            if (isValid(part)) {
                solve(idx + len, parts + 1, current + part + '.'); 
            }
        }
    }

    solve(0, 0, ""); 
    return result; 
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

    // Call your function with the input data
    const input = data.trim().split('\n');
    const string = input[0].split('=')[1].trim(); 

    // Call your function with the input data
    const result = restoreIpAddresses(string);

    // Append the result to output.txt instead of overwriting
    fs.appendFile('output.txt', JSON.stringify(result) + '\n', (err) => {
        if (err) {
            console.error('Error writing output file:', err);
        } else {
            console.log('Output written to output.txt');
        }
    });
});