function topologicalSortKahn(graph) {
    const inDegree = {};
    const queue = [];
    const result = [];

    // Initialize in-degree for each node
    for (let node in graph) {
        if (!(node in inDegree)) inDegree[node] = 0;
        for (let neighbor of graph[node]) {
            inDegree[neighbor] = (inDegree[neighbor] || 0) + 1;
        }
    }

    // Add nodes with zero in-degree to the queue
    for (let node in inDegree) {
        if (inDegree[node] === 0) {
            queue.push(node);
        }
    }

    // Process nodes in topological order
    while (queue.length > 0) {
        let node = queue.shift();
        result.push(node);

        for (let neighbor of graph[node]) {
            inDegree[neighbor]--;

            // If in-degree becomes 0, add it to the queue
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }

    // If we processed all nodes, return the order; otherwise, there is a cycle.
    return result.length === Object.keys(graph).length ? result : "Graph has a cycle!";
}

// Example usage:
const graph = {
    5: [2, 0],
    4: [0, 1],
    2: [3],
    3: [1],
    0: [],
    1: []
};

console.log(topologicalSortKahn(graph));
// Output: [4, 5, 2, 0, 3, 1] (One possible order)
