const fs = require('fs');

// Function to create a max heap
function buildMaxHeap(arr) {
    let n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }
}

// Function to perform heap sort (assumes max heap is already built)
function heapSort(arr) {
    let n = arr.length;

    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];

        heapify(arr, i, 0);
    }
}

// Heapify function to maintain heap property
function heapify(arr, n, i) {
    let largest = i; // Assume root is the largest
    let left = 2 * i + 1; // Left child index
    let right = 2 * i + 2; // Right child index

    // Check if left child is larger than root
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    // Check if right child is larger than the largest so far
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    // If largest is not root, swap and continue heapifying
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}

// Example usage
let arr = [55, 52, 53, 54, 50];

// Step 1: Build Max Heap
buildMaxHeap(arr);

// Step 2: Sort using Heap Sort
heapSort(arr);

customLog("Sorted array:", arr);


function customLog(...message) {
    fs.appendFile('output.txt', JSON.stringify(message) + '\n', (err) => {
        if (err) {
            console.error('Error writing to output.txt:', err);
        }
    });
}