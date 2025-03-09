const fs = require('fs');
const { customLog } = require('../utils');
const { Queue } = require('./index');

/*
## Stream First Non-repeating

Given an input stream s consisting only of lowercase alphabets. While reading characters from the stream, you have to tell which character has appeared only once in the stream upto that point. If there are many characters that have appeared only once, you have to tell which one of them was the first one to appear. If there is no such character then append '#' to the answer.

NOTE:
1. You need to find the answer for every i (0 <= i < n)
2. In order to find the solution for every you need to consider the string from starting position till the ith position.
 
Examples:
Input: s = "aabc"
Output: "a#bb"
Explanation: For every ith character we will consider the string from index 0 till index i first non repeating character is as follow- "a" - first non-repeating character is 'a' "aa" - no non-repeating character so '#' "aab" - first non-repeating character is 'b' "aabc" - there are two non repeating characters 'b' and 'c',  first non-repeating character is 'b' because 'b' comes before 'c' in the stream.

Input: s = "zz"
Output: "z#"
Explanation: For every character first non repeating character is as follow- "z" - first non-repeating character is 'z' "zz" - no non-repeating character so '#' 

Input: s = "bb"
Output: "b#"
Explanation: For every character first non repeating character is as follow- "b" - first non-repeating character is 'b' "bb" - no non-repeating character so '#'  

Constraints:
1 <= s.size()<= 105
'a' <= s[i] <= 'z'
*/

function FirstNonRepeating(string) { // using queue
    let map = new Map();
    let queue = new Queue();
    let ans = "";
    for (let i = 0; i < string.length; i++) {
      if (map.has(string[i])) {
        map.set(string[i], map.get(string[i]) + 1);
      } else {
        map.set(string[i], 1);
      }

      queue.enqueue(string[i]);
      while(!queue.isEmpty()){
        let char = queue.peek();
        if (map.get(char) > 1) {
            queue.dequeue();
        }else{
            ans += char;
            break;
        }
      }

      if(queue.isEmpty()){
        ans += '#';
      }
    }

    return ans;
}

customLog(FirstNonRepeating('aabc'))
// FirstNonRepeating("abcabc"): "aaabc#"
// FirstNonRepeating("aabbcc"): "a#b#c#"