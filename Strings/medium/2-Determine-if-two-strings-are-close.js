const fs = require('fs');

/*
## Determine if Two Strings Are Close

Two strings are considered close if you can attain one from the other using the following operations:

Operation 1: Swap any two existing characters.
For example, abcde -> aecdb
Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
You can use the operations on either string as many times as necessary.

Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

Example 1:
Input: word1 = "abc", word2 = "bca"
Output: true
Explanation: You can attain word2 from word1 in 2 operations.
Apply Operation 1: "abc" -> "acb"
Apply Operation 1: "acb" -> "bca"


Example 2:
Input: word1 = "a", word2 = "aa"
Output: false
Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.
Example 3:

Input: word1 = "cabbba", word2 = "abbccc"
Output: true
Explanation: You can attain word2 from word1 in 3 operations.
Apply Operation 1: "cabbba" -> "caabbb"
Apply Operation 2: "caabbb" -> "baaccc"
Apply Operation 2: "baaccc" -> "abbccc"
 

Constraints:
1 <= word1.length, word2.length <= 105
word1 and word2 contain only lowercase English letters.
*/

var closeStrings = function(word1, word2) {
    let m = word1.length;
    let n = word2.length;
 
    if(m !== n) return false;
 
    let freq1 = Array(26).fill(0);  
    let freq2 = Array(26).fill(0);  
 
    for(let i=0;i<m;i++){
        let ch1 = word1[i];
        let ch2 = word2[i];
        let idx1 = ch1.charCodeAt(0) - 'a'.charCodeAt(0);
        let idx2 = ch2.charCodeAt(0) - 'a'.charCodeAt(0);
        freq1[idx1]++;
        freq2[idx2]++;
    }
 
    // each character should present in both
    for(let i=0;i<26;i++){
       if(freq1[i] !== 0 && freq2[i] !== 0) continue;
       if(freq1[i] === 0 && freq2[i] === 0) continue;
 
       return false;
    }
 
    // match frequency
    freq1 = freq1.sort().join('');
    freq2 = freq2.sort().join('');
 
    return freq1 == freq2;
 };

 /*
   ## Algorithm
1. Check if the length of both strings is equal. If not, return false.
2. Create two arrays freq1 and freq2 of size 26 and initialize them with 0.
3. Traverse both strings and increment the count of the character at the corresponding index in the freq1 and freq2 arrays.
4. Check if each character is present in both strings. If not, return false. 
5. Sort the freq1 and freq2 arrays and convert them to strings.
6. Check if the sorted freq1 and freq2 arrays are equal. If they are equal, return true; otherwise, return false.
*/  // Time Complexity: O(n) where n is the length of the strings word1 and word2.






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
    const word1 = input[0].split('=')[1].trim(); 
    const word2 = input[1].split('=')[1].trim(); 

    // Call your function with the input data
    const result = closeStrings(word1, word2);

    // Append the result to output.txt instead of overwriting
    fs.appendFile('output.txt', JSON.stringify(result) + '\n', (err) => {
        if (err) {
            console.error('Error writing output file:', err);
        } else {
            console.log('Output written to output.txt');
        }
    });
});