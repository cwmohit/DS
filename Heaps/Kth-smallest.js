class MaxHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this.heap.sort((a, b) => b - a);
    }

    pop() {
        return this.heap.shift(); // Remove max element
    }

    top() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }
}

function kthSmallestElement(arr, k) {
    const maxHeap = new MaxHeap();

    // Step 1: Insert first K elements into the heap
    for (let i = 0; i < k; i++) {
        maxHeap.push(arr[i]);
    }

    // Step 2: Process remaining elements
    for (let i = k; i < arr.length; i++) {
        if (arr[i] < maxHeap.top()) {
            maxHeap.pop();
            maxHeap.push(arr[i]);
        }
    }

    // Step 3: Return top of max heap (Kth smallest)
    return maxHeap.top();
}

// Example usage
const arr = [7, 10, 4, 3, 20, 15];
const k = 3;
console.log(kthSmallestElement(arr, k)); // Output: 7