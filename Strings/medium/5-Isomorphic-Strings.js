/*
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

Example 1:
Input: s = "egg", t = "add"
Output: true
Explanation:
The strings s and t can be made identical by:
Mapping 'e' to 'a'.
Mapping 'g' to 'd'.

Example 2:
Input: s = "foo", t = "bar"
Output: false
Explanation:
The strings s and t can not be made identical as 'o' needs to be mapped to both 'a' and 'r'.

Example 3:
Input: s = "paper", t = "title"
Output: true

Constraints:
1 <= s.length <= 5 * 104
t.length == s.length
s and t consist of any valid ascii character.

*/


var isIsomorphic = function (word1, word2) {
  if (word1.length !== word2.length) return false;

  let map1 = new Map();
  let map2 = new Map();

  for (let i = 0; i < word1.length; i++) {
    let ch1 = word1[i];
    let ch2 = word2[i];

    if (map1.has(ch1) && map1.get(ch1) !== ch2) return false;
    if (map2.has(ch2) && map2.get(ch2) !== ch1) return false;

    map1.set(ch1, ch2);
    map2.set(ch2, ch1);
  }

  return true;
};
