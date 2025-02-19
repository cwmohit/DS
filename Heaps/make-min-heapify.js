function minHeapify(arr, n, index) {
    let smallest = index; // Assume current index is smallest
    let left = 2 * index + 1;  // Left child index
    let right = 2 * index + 2; // Right child index
  
    // Check if left child is smaller than current smallest
    if (left < n && arr[left] < arr[smallest]) {
      smallest = left;
    }
  
    // Check if right child is smaller than current smallest
    if (right < n && arr[right] < arr[smallest]) {
      smallest = right;
    }
  
    // If smallest is not the root, swap and heapify
    if (smallest !== index) {
      [arr[index], arr[smallest]] = [arr[smallest], arr[index]];
      minHeapify(arr, n, smallest); // Recursively heapify the affected subtree
    }
  }
  
  // Example usage:
  let arr = [3, 10, 15, 30, 40, 50, 20];
  let n = arr.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    minHeapify(arr, n, i);
  }
  console.log(arr); // Min heapified array
  