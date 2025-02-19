class MaxHeap {
  constructor(array = []) {
    this.heap = array;
    this.buildMaxHeap();
  }

  buildMaxHeap() {
    const startIdx = Math.floor(this.heap.length / 2) - 1;
    for (let i = startIdx; i >= 0; i--) {
      this.maxHeapify(i);
    }
  }

  maxHeapify(index) {
    const left = 2 * index + 1;
    const right = 2 * index + 2;
    let largest = index;

    if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
      largest = left;
    }

    if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
      largest = right;
    }

    if (largest !== index) {
      [this.heap[index], this.heap[largest]] = [
        this.heap[largest],
        this.heap[index],
      ];
      this.maxHeapify(largest);
    }
  }

  merge(otherHeap) {
    this.heap = [...this.heap, ...otherHeap.heap];
    this.buildMaxHeap();
  }

  getHeap() {
    return this.heap;
  }
}

// Example usage:
const heap1 = new MaxHeap([10, 5, 3, 2, 4]);
const heap2 = new MaxHeap([8, 7, 6, 1]);

heap1.merge(heap2);

console.log(heap1.getHeap());
