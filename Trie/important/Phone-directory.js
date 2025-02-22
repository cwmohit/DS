// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

class TrieNode {
    constructor() {
        this.children = {}; // Stores child nodes
        this.contacts = new Set();
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    // Inserts a contact into the Trie
    insert(contact) {
        let node = this.root;
        for (const char of contact) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
            node.contacts.add(contact);
        }
    }

    // Searches for contacts with the given prefix
    searchPrefix(prefix) {
        let node = this.root;
        for (const char of prefix) {
            if (!node.children[char]) {
                return ["0"]; // No matching contacts
            }
            node = node.children[char];
        }
        
        return [...node.contacts].sort(); // Return sorted contacts
    }

    // Returns results for each prefix of the query string
    getSuggestions(query) {
        let result = [];
        for (let i = 1; i <= query.length; i++) {
            let prefix = query.slice(0, i);
            result.push(this.searchPrefix(prefix));
        }
        return result;
    }
}

// Function to get phone directory search results
function phoneDirectory(contacts, query) {
    const trie = new Trie();

    // Insert contacts into Trie
    for (const contact of new Set(contacts)) {
        trie.insert(contact);
    }

    // Get search results for each prefix of query
    return trie.getSuggestions(query);
}

// Example Usage:
const contacts = ["gopal", "gopalrao", "gokul", "goat"];
const query = "gopal";

const result = phoneDirectory(contacts, query);
console.log(result);

/* 
Expected Output:
[
  [ 'goat', 'gokul', 'gopal', 'gopalrao' ],  // Prefix: "g"
  [ 'goat', 'gokul', 'gopal', 'gopalrao' ],  // Prefix: "go"
  [ 'gopal', 'gopalrao' ],                   // Prefix: "gop"
  [ 'gopal', 'gopalrao' ],                   // Prefix: "gopa"
  [ 'gopal', 'gopalrao' ]                    // Prefix: "gopal"
]
*/


/*
Example
Let's insert the contacts:
["gopal", "gopalrao", "gokul", "goat"]
and then search for the query "gopal".

Step 1: Trie Construction
We insert each word character by character into the Trie.

1. Insert "gopal"
markdown
        (root)
          |
          g
          |
          o
          |
          p
          |
          a
          |
          l
At each step, we add the word "gopal" to the contacts set at each node.
2. Insert "gopalrao"
"gopal" already exists, so we extend it with "rao":
markdown
        (root)
          |
          g
          |
          o
          |
          p
          |
          a
          |
          l
          |
          r
          |
          a
          |
          o
3. Insert "gokul"
Common prefix "go" already exists, so we branch out:
yaml
        (root)
          |
          g
          |
          o
         / \
        p   k
        |    \
        a     u
        |      \
        l       l
       /  \
      r    (end)
      |
      a
      |
      o
4. Insert "goat"
The prefix "go" exists, but "goa" doesn't, so we branch:
yaml
        (root)
          |
          g
          |
          o
         / | \
        p  k  a
        |   \   \
        a    u   t
        |     \
        l      l
       /  \
      r    (end)
      |
      a
      |
      o
Step 2: Searching for Prefixes of "gopal"
Now, we search for each prefix of "gopal" and return sorted contacts.

Prefix Search Results
"g" → ["goat", "gokul", "gopal", "gopalrao"]
"go" → ["goat", "gokul", "gopal", "gopalrao"]
"gop" → ["gopal", "gopalrao"]
"gopa" → ["gopal", "gopalrao"]
"gopal" → ["gopal", "gopalrao"]


*/