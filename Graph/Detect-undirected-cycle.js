const { Graph } = require(".");

function hasCycleBFS() {
  let visited = new Set();

  for (let vertex of this.adjacencyList.keys()) {
    if (!visited.has(vertex)) {
      if (detectCycleBFS.call(this, vertex, visited)) {
        return true;
      }
    }
  }
  return false;
}

// Helper function to detect cycles using BFS
function detectCycleBFS(start, visited) {
  let queue = [start];
  let parent = new Map(); // Track parent nodes

  visited.add(start);
  parent.set(start, null);

  while (queue.length) {
    let front = queue.shift();

    for (let neighbor of this.adjacencyList.get(front)) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
        parent.set(neighbor, front);
      } else if (parent.get(front) !== neighbor) {
        return true; // Cycle detected
      }
    }
  }
  return false;
}

// Attach the function as a prototype to the Graph class
Graph.prototype.hasCycleBFS = hasCycleBFS;


// Using DFS
Graph.prototype.hasCycleDFS = function () {
  const visited = new Set();

  const dfs = (node, parent) => {
    visited.add(node);

    for (let neighbor of this.adjacencyList.get(node)) {
      if (!visited.has(neighbor)) {
        if (dfs(neighbor, node)) return true;
      } else if (neighbor !== parent) {
        // If the neighbor is visited and not the parent, we found a cycle.
        return true;
      }
    }

    return false;
  };

  for (let vertex of this.adjacencyList.keys()) {
    if (!visited.has(vertex)) {
      if (dfs(vertex, null)) return true;
    }
  }

  return false;
};
