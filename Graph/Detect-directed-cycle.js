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



// kahn's algo
Graph.prototype.hasCycleBFS = function () {
  const inDegree = new Map();

  // Initialize in-degree for all vertices
  for (let [vertex, edges] of this.adjacencyList) {
    if (!inDegree.has(vertex)) inDegree.set(vertex, 0);
    for (let neighbor of edges) {
      inDegree.set(neighbor, (inDegree.get(neighbor) || 0) + 1);
    }
  }

  // Collect nodes with in-degree 0
  let queue = [];
  for (let [vertex, degree] of inDegree) {
    if (degree === 0) queue.push(vertex);
  }

  let count = 0;
  while (queue.length) {
    let node = queue.shift();
    count++;

    for (let neighbor of this.adjacencyList.get(node) || []) {
      inDegree.set(neighbor, inDegree.get(neighbor) - 1);
      if (inDegree.get(neighbor) === 0) queue.push(neighbor);
    }
  }

  // If processed nodes < total nodes, there's a cycle
  return count !== this.adjacencyList.size;
};