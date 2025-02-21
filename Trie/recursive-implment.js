class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  // Helper function to insert recursively
  _insert(node, word, index) {
    if (index === word.length) {
      node.isEndOfWord = true;
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

  // Helper function to search recursively
  _search(node, word, index) {
    if (index === word.length) {
      return node.isEndOfWord;
    }

    const char = word[index];
    if (!node.children[char]) {
      return false;
    }

    return this._search(node.children[char], word, index + 1);
  }

  search(word) {
    return this._search(this.root, word, 0);
  }

  _startsWith(node, prefix, index) {
    if (index === prefix.length) {
      return true;
    }

    const char = prefix[index];
    if (!node.children[char]) {
      return false;
    }

    return this._startsWith(node.children[char], prefix, index + 1);
  }

  startsWith(prefix) {
    return this._startsWith(this.root, prefix, 0);
  }
}

// Example usage:
const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple")); // true
console.log(trie.search("app")); // false
console.log(trie.startsWith("app")); // true
trie.insert("app");
console.log(trie.search("app")); // true
