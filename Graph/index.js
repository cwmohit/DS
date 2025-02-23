class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  // Add a vertex to the graph
  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  // Add an edge between two vertices
  addEdge(vertex1, vertex2, directed = false) {
    if (!this.adjacencyList.has(vertex1)) this.addVertex(vertex1);
    if (!this.adjacencyList.has(vertex2)) this.addVertex(vertex2);

    this.adjacencyList.get(vertex1).push(vertex2);
    if (!directed) {
      this.adjacencyList.get(vertex2).push(vertex1);
    }
  }

  // Remove an edge
  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList.has(vertex1)) {
      this.adjacencyList.set(
        vertex1,
        this.adjacencyList.get(vertex1).filter((v) => v !== vertex2)
      );
    }
    if (this.adjacencyList.has(vertex2)) {
      this.adjacencyList.set(
        vertex2,
        this.adjacencyList.get(vertex2).filter((v) => v !== vertex1)
      );
    }
  }

  // Remove a vertex
  removeVertex(vertex) {
    if (this.adjacencyList.has(vertex)) {
      this.adjacencyList.delete(vertex);
      for (let [key, neighbors] of this.adjacencyList) {
        this.adjacencyList.set(
          key,
          neighbors.filter((v) => v !== vertex)
        );
      }
    }
  }

  // Display the graph
  display() {
    for (let [vertex, edges] of this.adjacencyList) {
      console.log(`${vertex} -> ${edges.join(", ")}`);
    }
  }

  // Breadth-First Search (BFS)
  bfs(start, visited = new Set()) {
    let queue = [start];
    visited.add(start);

    while (queue.length) {
      let vertex = queue.shift();
      console.log(vertex);

      for (let neighbor of this.adjacencyList.get(vertex)) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
  }

  // Depth-First Search (DFS)
  dfs(start, visited = new Set()) {
    if (!this.adjacencyList.has(start)) return;
    console.log(start);
    visited.add(start);

    for (let neighbor of this.adjacencyList.get(start)) {
      if (!visited.has(neighbor)) {
        this.dfs(neighbor, visited);
      }
    }
  }

  displayBfs(start) {
    let visited = new Set();
    this.bfs(start, visited);

    // Graph can have disconnected nodes as well
    for (let vertex of this.adjacencyList.keys()) {
      if (!visited.has(vertex)) {
        this.bfs(vertex, visited);
      }
    }
  }

  displayDfs(start) {
    let visited = new Set();
    this.dfs(start, visited);

    // Graph can have disconnected nodes as well
    for (let vertex of this.adjacencyList.keys()) {
      if (!visited.has(vertex)) {
        this.dfs(vertex, visited);
      }
    }
  }
}

// Example Usage
const graph = new Graph();
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E", true); // Directed edge C -> E

console.log("Graph:");
graph.display();

console.log("\nBFS Traversal:");
graph.displayBfs("A");

console.log("\nDFS Traversal:");
graph.displayDfs("A");


module.exports = {
    Graph
}