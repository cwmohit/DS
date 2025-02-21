const { MinHeap } = require("../min-heap");

// Function to merge k sorted arrays
function mergeKSortedArrays(arrays) {
    let minHeap = new MinHeap(); // Create a min heap
    let result = []; // Array to store the merged result

    // Step 1: Insert the first element from each sorted array into the heap
    for (let i = 0; i < arrays.length; i++) {
        if (arrays[i].length > 0) {
            minHeap.push({ 
                value: arrays[i][0],  // First element of array
                arrayIndex: i,        // Index of the array it came from
                elementIndex: 0       // Index of the element in that array
            });
        }
    }

    // Step 2: Process elements from the min heap
    while (!minHeap.isEmpty()) {
        let { value, arrayIndex, elementIndex } = minHeap.pop(); // Get the smallest element
        result.push(value); // Add the smallest element to the result array

        let nextElementIndex = elementIndex + 1; // Get the next index in the same array
        if (nextElementIndex < arrays[arrayIndex].length) {
            // Push the next element from the same array into the heap
            minHeap.push({ 
                value: arrays[arrayIndex][nextElementIndex], 
                arrayIndex: arrayIndex, 
                elementIndex: nextElementIndex 
            });
        }
    }

    return result; 
}

// Example usage
const arrays = [
    [1, 5, 9],    // Sorted array 1
    [2, 6, 8],    // Sorted array 2
    [3, 7, 10]    // Sorted array 3
];

console.log(mergeKSortedArrays(arrays)); 
// Output: [1, 2, 3, 5, 6, 7, 8, 9, 10]
