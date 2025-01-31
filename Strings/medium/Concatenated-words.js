const fs = require('fs');

/*
## Concatenated Words

Given an array of strings words (without duplicates), return all the concatenated words in the given list of words.

A concatenated word is defined as a string that is comprised entirely of at least two shorter words (not necessarily distinct) in the given array.

Example 1:
Input: words = ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]
Output: ["catsdogcats","dogcatsdog","ratcatdogcat"]
Explanation: "catsdogcats" can be concatenated by "cats", "dog" and "cats"; 
"dogcatsdog" can be concatenated by "dog", "cats" and "dog"; 
"ratcatdogcat" can be concatenated by "rat", "cat", "dog" and "cat".

Example 2:
Input: words = ["cat","dog","catdog"]
Output: ["catdog"]
*/

var findAllConcatenatedWordsInADict = function(words) {
    let result = [];
    let wordSet = new Set(words); 
    let memo = new Map(); 

    function isConcatenated(word) {
        if (memo.has(word)) return memo.get(word); 

        for (let i = 0; i < word.length; i++) {
            let prefix = word.substr(0, i + 1);
            let suffix = word.substr(i + 1);

            if (wordSet.has(prefix) && (wordSet.has(suffix) || isConcatenated(suffix))) {
                memo.set(word, true);
                return true;
            }
        }

        memo.set(word, false);
        return false;
    }

    for (let word of words) {
        wordSet.delete(word);

        if (isConcatenated(word)) {
            result.push(word);
        }

        wordSet.add(word);
    }

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
    const input = JSON.parse(data.trim());

    // Call your function with the input data
    const result = findAllConcatenatedWordsInADict(input);

    // Append the result to output.txt instead of overwriting
    fs.appendFile('output.txt', JSON.stringify(result) + '\n', (err) => {
        if (err) {
            console.error('Error writing output file:', err);
        } else {
            console.log('Output written to output.txt');
        }
    });
});