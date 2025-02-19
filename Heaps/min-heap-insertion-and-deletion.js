class MinHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(i) { return Math.floor((i - 1) / 2); }
  getLeftChildIndex(i) { return 2 * i + 1; }
  getRightChildIndex(i) { return 2 * i + 2; }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    let parentIndex = this.getParentIndex(index);

    while (index > 0 && this.heap[index] < this.heap[parentIndex]) {
      this.swap(index, parentIndex);
      index = parentIndex;
      parentIndex = this.getParentIndex(index);
    }
  }

  extractMin() {
    return this.delete(0);
  }

  delete(index) {
    if (index >= this.heap.length) return null;
    
    this.swap(index, this.heap.length - 1);
    const removedValue = this.heap.pop();
    
    this.heapifyDown(index);
    this.bubbleUp(index);
    
    return removedValue;
  }

  heapifyDown(index) {
    let leftChildIndex = this.getLeftChildIndex(index);
    let rightChildIndex = this.getRightChildIndex(index);

    while (leftChildIndex < this.heap.length) {
      let smallest = leftChildIndex;

      if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[leftChildIndex]) {
        smallest = rightChildIndex;
      }

      if (this.heap[index] <= this.heap[smallest]) break;

      this.swap(index, smallest);
      index = smallest;
      leftChildIndex = this.getLeftChildIndex(index);
      rightChildIndex = this.getRightChildIndex(index);
    }
  }

  print() {
    console.log(this.heap);
  }
}

// Example Usage:
const heap = new MinHeap();
heap.insert(10);
heap.insert(5);
heap.insert(20);
heap.insert(3);
heap.print(); // [3, 5, 20, 10]

console.log(heap.delete(1)); // Removes 5
heap.print(); // [3, 10, 20]