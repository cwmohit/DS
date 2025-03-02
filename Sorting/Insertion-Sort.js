/*
  Explaination: 
  1.  Move current element to correct position by comparing right to left
  2.  If the current element is greater than the any element from their left, swap them
  3.  Repeat the process until the array is sorted

  4.  Time complexity is O(n^2) because of nested loops
*/

function insertionSort(arr) {
    let n = arr.length;
    
    for (let i = 1; i < n; i++) {
        let current = arr[i];
        let j = i - 1;

        // Shift elements to the right to create space for the current element
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Insert the current element at the correct position
        arr[j + 1] = current;
    }

    return arr;
}

// Example usage:
const arr = [64, 25, 12, 22, 11];
console.log(insertionSort(arr)); // Output: [11, 12, 22, 25, 64]