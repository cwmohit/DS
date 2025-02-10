const fs = require('fs');

/*
## Find All Anagrams in a String

Given two strings s and p, return an array of all the start indices of p's 
anagrams in s. You may return the answer in any order.

Example 1:
Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".

Example 2:
Input: s = "abab", p = "ab"
Output: [0,1,2]
Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
 
Constraints:
1 <= s.length, p.length <= 3 * 104
s and p consist of lowercase English letters.
*/

var findAnagrams = function(s, p) {
    let pSize = p.length;
    let result = [];
    let pFreq = Array(26).fill(0);

    const charIndex = (char) => char.charCodeAt(0) - 'a'.charCodeAt(0);

    const allZero = (counter) => {
        for(let i=0; i<counter.length; i++){
            if(counter[i] !== 0) return false;
        }

        return true;
    }

    for (let i = 0; i < pSize; i++) {
        pFreq[charIndex(p[i])]++;
    }

    let left = 0, right = 0;

    while(right < s.length){
        pFreq[charIndex(s[right])]--;

        if(right - left + 1 === pSize){
            if(allZero(pFreq)){
                result.push(left);
            }

            pFreq[charIndex(s[left])]++;
            left++;
        }

        right++;
    }

    return result;
};

// Example usage:
customLog(findAnagrams('cbaebabacd', 'abc')); // Output: 4 ([1,2,1,2])


function customLog(...message) {
    fs.appendFile('output.txt', JSON.stringify(message) + '\n', (err) => {
        if (err) {
            console.error('Error writing to output.txt:', err);
        }
    });
}