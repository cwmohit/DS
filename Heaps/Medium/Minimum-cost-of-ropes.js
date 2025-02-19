const { customLog } = require('../../utils');
const { MinHeap } = require('../min-heap');

function minCost(ropes) {
    if (ropes.length <= 1) return 0;

    let minHeap = new MinHeap();
    for (let rope of ropes) minHeap.push(rope); // push

    let totalCost = 0;

    while (minHeap.size() > 1) {
        let first = minHeap.pop(); // pop
        let second = minHeap.pop(); // pop
        console.log(first, second);
        let cost = first + second;
        totalCost += cost;
        minHeap.push(cost);
    }

    return totalCost;
}

// Example usage
customLog(minCost([4, 3, 2, 6])); // Output: 29
