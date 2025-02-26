class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addEdge(u, v) {
    if (!this.adjList.has(u)) this.adjList.set(u, []);
    if (!this.adjList.has(v)) this.adjList.set(v, []);
    this.adjList.get(u).push(v);
    this.adjList.get(v).push(u); // Since the graph is undirected
  }

  shortestPath(start, target) {
    if (!this.adjList.has(start) || !this.adjList.has(target)) return null;

    let queue = [start];
    let visited = new Set();
    let parent = new Map();

    visited.add(start);
    parent.set(start, null);

    // BFS Traversal
    while (queue.length > 0) {
      let node = queue.shift();

      if (node === target) break; // Stop when we reach the target

      for (let neighbor of this.adjList.get(node)) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          parent.set(neighbor, node); // Store the parent for backtracking
          queue.push(neighbor);
        }
      }
    }

    // Reconstruct the shortest path from the parent map
    if (!parent.has(target)) return null; // No path found

    let path = [];
    let current = target;
    while (current !== null) {
      path.push(current);
      current = parent.get(current);
    }

    return path.reverse(); // Reverse to get the correct order
  }
}

// Example Usage:
const graph = new Graph();
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(3, 4);
graph.addEdge(4, 5);

console.log(graph.shortestPath(1, 5)); // Output: [1, 2, 4, 5] or [1, 3, 4, 5]
