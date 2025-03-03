/*
The function longestCommonPrefix finds the longest common prefix among an array of strings.

Explanation:
1. If the input array is empty, return an empty string.
2. Initialize prefix as the first string in the array.
3. Iterate through the remaining strings:
    - While the current string does not start with prefix, shorten prefix by removing its last character.
      Return the final prefix.
4. This ensures the prefix is progressively shortened until it matches all strings.
*/

var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";
    
    let prefix = strs[0];
    
    for (let index = 1; index < strs.length; index++) {
        while (strs[index].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
        }
    }
    
    return prefix;
};