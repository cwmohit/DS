class MinHeap {
  constructor() {
      this.heap = [];
  }

  push(val) {
      this.heap.push(val);
      this.heapifyUp();
  }

  top() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }

  pop() {
      if (this.heap.length === 1) return this.heap.pop();
      const min = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.heapifyDown();
      return min;
  }

  size() {
      return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  heapifyUp() {
      let index = this.heap.length - 1;
      while (index > 0) {
          let parentIndex = Math.floor((index - 1) / 2);
          if (this.heap[parentIndex] <= this.heap[index]) break;
          [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
          index = parentIndex;
      }
  }

  heapifyDown() {
      let index = 0;
      while (2 * index + 1 < this.heap.length) {
          let smallest = 2 * index + 1;
          let right = 2 * index + 2;
          if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
              smallest = right;
          }
          if (this.heap[index] <= this.heap[smallest]) break;
          [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
          index = smallest;
      }
  }
}

module.exports = { MinHeap };