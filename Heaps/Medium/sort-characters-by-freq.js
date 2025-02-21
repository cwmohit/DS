function frequencySort(s) {
  const freqMap = new Map();
  for (let char of s) {
    freqMap.set(char, (freqMap.get(char) || 0) + 1);
  }

  const maxHeap = new MaxHeap();
  for (let [char, freq] of freqMap) {
    maxHeap.insert([char, freq]);
  }

  let result = "";
  while (!maxHeap.isEmpty()) {
    let [char, freq] = maxHeap.extractMax();
    result += char.repeat(freq);
  }

  return result;
}


// class MaxHeap {
//   constructor() {
//     this.heap = [];
//   }

//   insert([char, freq]) {
//     this.heap.push([char, freq]);
//     this.bubbleUp();
//   }

//   bubbleUp() {
//     let index = this.heap.length - 1;
//     while (index > 0) {
//       let parentIndex = Math.floor((index - 1) / 2);
//       if (this.heap[parentIndex][1] >= this.heap[index][1]) break;
//       [this.heap[parentIndex], this.heap[index]] = [
//         this.heap[index],
//         this.heap[parentIndex],
//       ];
//       index = parentIndex;
//     }
//   }

//   extractMax() {
//     if (this.heap.length === 1) return this.heap.pop();
//     let max = this.heap[0];
//     this.heap[0] = this.heap.pop();
//     this.sinkDown(0);
//     return max;
//   }

//   sinkDown(index) {
//     let leftChild, rightChild;
//     let length = this.heap.length;
//     while (true) {
//       let largest = index;
//       let left = 2 * index + 1;
//       let right = 2 * index + 2;

//       if (left < length && this.heap[left][1] > this.heap[largest][1])
//         largest = left;
//       if (right < length && this.heap[right][1] > this.heap[largest][1])
//         largest = right;

//       if (largest === index) break;
//       [this.heap[index], this.heap[largest]] = [
//         this.heap[largest],
//         this.heap[index],
//       ];
//       index = largest;
//     }
//   }

//   isEmpty() {
//     return this.heap.length === 0;
//   }
// }
