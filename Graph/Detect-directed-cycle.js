const { Graph } = require(".");

Graph.prototype.hasCycleDFS = function () {
  const visited = new Set();
  const recStack = new Set(); // Tracks nodes in the current DFS call

  const dfs = (node) => {
    if (!visited.has(node)) {
      visited.add(node);
      recStack.add(node);

      for (let neighbor of this.adjacencyList.get(node) || []) {
        if (!visited.has(neighbor) && dfs(neighbor)) return true;
        if (recStack.has(neighbor)) return true; // Found a cycle
      }
    }

    recStack.delete(node); // Remove from recursion stack after traversal
    return false;
  };

  for (let vertex of this.adjacencyList.keys()) {
    if (!visited.has(vertex) && dfs(vertex)) return true;
  }

  return false;
};
