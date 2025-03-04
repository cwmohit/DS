const fs = require('fs');

/*
## Check Palindrom problem

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
*/

function CheckPalindrom(s) {
    let cleanedString = '';
    for (let i = 0; i < s.length; i++) {
        // 48 - 57 are numbers, 65 - 90 are uppercase letters, 97 - 122 are lowercase letters
        if (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57 || s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90 || s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) {
            cleanedString += s[i].toLowerCase();
        }
    }
    
    function ReverseString(n) {
        if(n.length === 0) return '';

        let current = n[0];
        let rest = n.slice(1);
        return ReverseString(rest) + current;
    }

    return cleanedString === ReverseString(cleanedString);
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
    const result = CheckPalindrom(data);

    // Append the result to output.txt instead of overwriting
    fs.appendFile('output.txt', result + '\n', (err) => {
        if (err) {
            console.error('Error writing output file:', err);
        } else {
            console.log('Output written to output.txt');
        }
    });
});
