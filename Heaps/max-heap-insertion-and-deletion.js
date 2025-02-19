class MaxHeap {
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

  bubbleUp(index = this.heap.length - 1) {
    let parentIndex = this.getParentIndex(index);

    while (index > 0 && this.heap[index] > this.heap[parentIndex]) {
      this.swap(index, parentIndex);
      index = parentIndex;
      parentIndex = this.getParentIndex(index);
    }
  }

  extractMax() {
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
      let largest = leftChildIndex;

      if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[leftChildIndex]) {
        largest = rightChildIndex;
      }

      if (this.heap[index] >= this.heap[largest]) break;

      this.swap(index, largest);
      index = largest;
      leftChildIndex = this.getLeftChildIndex(index);
      rightChildIndex = this.getRightChildIndex(index);
    }
  }

  print() {
    console.log(this.heap);
  }
}

// Example Usage:
const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(5);
maxHeap.insert(20);
maxHeap.insert(3);
maxHeap.print(); // [20, 10, 5, 3]

console.log(maxHeap.delete(1)); // Removes 10
maxHeap.print(); // [20, 3, 5]