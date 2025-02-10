const fs = require('fs');

/*
## Minimum Window Substring

Given two strings s and t of lengths m and n respectively, return the minimum window 
substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

Example 1:
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

Example 2:
Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.

Example 3:
Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.

Constraints:
m == s.length
n == t.length
1 <= m, n <= 105
s and t consist of uppercase and lowercase English letters.
*/

var minWindow = function(s, t) {
    if (s.length < t.length) return "";

    let tCount = new Map(); 
    let sCount = new Map(); 

    for (let char of t) {
        tCount.set(char, (tCount.get(char) || 0) + 1);
    }

    let left = 0, minLen = Infinity, minStart = 0;
    let required = tCount.size, formed = 0; 

    for (let right = 0; right < s.length; right++) {
        let char = s[right];
        sCount.set(char, (sCount.get(char) || 0) + 1);

        if (tCount.has(char) && sCount.get(char) === tCount.get(char)) {
            formed++; 
        }

        while (formed === required) { 
            if (right - left + 1 < minLen) { 
                minLen = right - left + 1;
                minStart = left;
            }

            let leftChar = s[left];
            sCount.set(leftChar, sCount.get(leftChar) - 1);
            if (tCount.has(leftChar) && sCount.get(leftChar) < tCount.get(leftChar)) {
                formed--; 
            }
            left++; 
        }
    }

    return minLen === Infinity ? "" : s.substring(minStart, minStart + minLen);
};

// Example usage:
customLog(minWindow('ADOBECODEBANC', 'ABC')); // Output: 4 ([1,2,1,2])


function customLog(...message) {
    fs.appendFile('output.txt', JSON.stringify(message) + '\n', (err) => {
        if (err) {
            console.error('Error writing to output.txt:', err);
        }
    });
}