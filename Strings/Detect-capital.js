const fs = require('fs');

/*
## Detect Capital

We define the usage of capitals in a word to be right when one of the following cases holds:
All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital, like "Google".
Given a string word, return true if the usage of capitals in it is right.

Example 1:
Input: word = "USA"
Output: true

Example 2:
Input: word = "FlaG"
Output: false
 

Constraints:
1 <= word.length <= 100
word consists of lowercase and uppercase English letters.

*/

function allCapital(word){
    for(let i=0;i<word.length;i++){
        if(word[i] < 'A' || word[i] > 'Z'){
            return false;
        }
    }

    return true;
}

function allSmall(word){
    for(let i=0;i<word.length;i++){
        if(word[i] < 'a' || word[i] > 'z'){
            return false;
        }
    }

    return true;
}

var detectCapitalUse = function(word) {
    if(allCapital(word) || allSmall(word) || allSmall(word.substr(1))){
        return true;
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

    // Call your function with the input data
    const input = data.trim().split('\n');
    const string = input[0].split('=')[1].trim(); 

    // Call your function with the input data
    const result = detectCapitalUse(string);

    // Append the result to output.txt instead of overwriting
    fs.appendFile('output.txt', JSON.stringify(result) + '\n', (err) => {
        if (err) {
            console.error('Error writing output file:', err);
        } else {
            console.log('Output written to output.txt');
        }
    });
});