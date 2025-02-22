class TrieNode {
  constructor() {
    this.children = {};
    this.isTerminal = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  _insert(node, word, index) {
    if (index === word.length) {
      node.isTerminal = true;
      return;
    }

    const char = word[index];
    if (!node.children[char]) {
      node.children[char] = new TrieNode();
    }

    this._insert(node.children[char], word, index + 1);
  }

  insert(word) {
    this._insert(this.root, word, 0);
  }

  _findLongestCommonPrefix(node, prefix) {
    const keys = Object.keys(node.children);

    if (keys.length !== 1 || node.isTerminal) {
      return prefix;
    }

    const char = keys[0];
    return this._findLongestCommonPrefix(node.children[char], prefix + char);
  }

  findLongestCommonPrefix() {
    return this._findLongestCommonPrefix(this.root, "");
  }
}

var longestCommonPrefix = function (strs) {
  if (!strs.length) return "";

  const trie = new Trie();
  for (const word of strs) {
    trie.insert(word);
  }

  return trie.findLongestCommonPrefix();
};
