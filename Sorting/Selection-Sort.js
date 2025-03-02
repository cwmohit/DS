/*
  Explaination:
  1. Move smallest element to the correct position
  2. Move the next smallest element to the correct position
  3. Repeat the above two steps until the array is sorted

  Time complexity: O(n^2) in the worst case (when the array is reverse sorted)

  is it stable/unstable?
  This algorithm is unstable because it swaps elements in the array, which can change the relative order of
  equal elements.
  what does it mean (relative order of equal elements)?
  It means that if two elements are equal, their original order is preserved in the sorted array.
*/


function selectionSort(arr) {
    let n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i; // Assume the current index is the minimum

        // Find the index of the minimum element in the unsorted part
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j; 
            }
        }

        // Swap the found minimum element with the first element of the unsorted part
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}

// Example usage:
const arr = [64, 25, 12, 22, 11];
console.log(selectionSort(arr)); // Output: [11, 12, 22, 25, 64]
