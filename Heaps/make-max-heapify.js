function maxHeapify(arr, n, index) {
    let largest = index;
    let left = 2 * index + 1;
    let right = 2 * index + 2;
  
    // Check if left child is larger
    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }
  
    // Check if right child is larger
    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }
  
    // Swap if largest is not root and heapify
    if (largest !== index) {
      [arr[index], arr[largest]] = [arr[largest], arr[index]];
      maxHeapify(arr, n, largest);
    }
  }
  
  // Example usage:
  let arr2 = [10, 20, 15, 30, 40, 50, 60];
  let n2 = arr2.length;
  for (let i = Math.floor(n2 / 2) - 1; i >= 0; i--) {
    maxHeapify(arr2, n2, i);
  }
  console.log(arr2); // Max heapified array
  