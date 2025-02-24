function topologicalSort(graph) {
    const visited = new Set();
    const stack = [];

    function dfs(node) {
        if (visited.has(node)) return;
        visited.add(node);

        for (let neighbor of graph[node] || []) {
            dfs(neighbor);
        }

        stack.push(node);
    }

    // Call DFS for each node
    for (let node in graph) {
        if (!visited.has(node)) {
            dfs(node);
        }
    }

    return stack.reverse(); // Reverse the stack to get the correct order
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

console.log(topologicalSort(graph)); 
// Output: [5, 4, 2, 3, 1, 0] (One possible order)