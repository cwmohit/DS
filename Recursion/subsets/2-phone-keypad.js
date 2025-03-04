const fs = require('fs');

/*
## Letter Combinations of a Phone Number

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

1() 2(abc) 3(def)
4(ghi) 5(jkl) 6(mno)
7(pqr) 8(tuv) 9(wxyz)

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:

Input: digits = ""
Output: []
Example 3:

Input: digits = "2"
Output: ["a","b","c"]
*/

function letterCombinations(s) {
  if (!s) return [];
  const phone = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqr",
    8: "tuv",
    9: "wxyz",
  };
  let res = [];

  function helper(curr, s, index) {
    if (index >= s.length) {
      res.push(curr);
      return;
    }

    let letters = phone[s[index]];
    for (let i = 0; i < letters.length; i++) {
      helper(curr + letters[i], s, index + 1);
    }
  }


  helper("", s, 0);
  return res;
}

// TC: O(4^n) in the worst case.
/*
  explain:
    digits = "23"
    phone = {
      2: "abc",
      3: "def",
      4: "ghi",
      5: "jkl",
      6: "mno",
      7: "pqr",
      8: "tuv",
      9: "wxyz",
    }

    1. helper("", "23", 0)
    2. helper("a", "23", 1)
    3. helper("ad", "23", 2) -> push "ad"
    4. helper("ae", "23", 2) -> push "ae"
    5. helper("af", "23", 2) -> push "af"
    6. helper("b", "23", 1)
    7. helper("bd", "23", 2) -> push "bd"
    8. helper("be", "23", 2) -> push "be"
    9. helper("bf", "23", 2) -> push "bf"
    10. helper("c", "23", 1)
    11. helper("cd", "23", 2) -> push "cd"
    12. helper("ce", "23", 2) -> push "ce"
    13. helper("cf", "23", 2) -> push "cf"
*/















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
    const result = letterCombinations(data);

    // Append the result to output.txt instead of overwriting
    fs.appendFile('output.txt', result + '\n', (err) => {
        if (err) {
            console.error('Error writing output file:', err);
        } else {
            console.log('Output written to output.txt');
        }
    });
});
