class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(node, priority) {
    this.values.push({ node, priority });
    this.values.sort((a, b) => a.priority - b.priority);
  }
  dequeue() {
    return this.values.shift().node;
  }
  isEmpty() {
    return this.values.length === 0;
  }
}

function dijkstra(graph, start) {
  const distances = {};
  const pq = new PriorityQueue();

  for (let node in graph) {
    distances[node] = Infinity;
  }
  distances[start] = 0;
  pq.enqueue(start, 0);

  while (!pq.isEmpty()) {
    let node = pq.dequeue();

    for (let [neighbor, weight] of Object.entries(graph[node])) {
      let newDist = distances[node] + weight;
      if (newDist < distances[neighbor]) {
        distances[neighbor] = newDist;
        pq.enqueue(neighbor, newDist);
      }
    }
  }
  return distances;
}

// Example Usage
const graph = {
  A: { B: 4, C: 2 },
  B: { A: 4, E: 3 },
  C: { A: 2, D: 2, F: 4 },
  D: { C: 2, E: 3, F: 1 },
  E: { B: 3, D: 3, F: 1 },
  F: { C: 4, D: 1, E: 1 },
};

console.log(dijkstra(graph, "A"));
// Output: { A: 0, B: 4, C: 2, D: 4, E: 6, F: 5 }
