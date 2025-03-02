/*
 Explaination:
  1. Move largest element to the end of the array
  2. Move second largest element to the second last position
  3. Repeat the process until the array is sorted

  is it stable/unstable?
  This algorithm is unstable because it swaps elements in the array, which can change the relative order of 
  equal elements. 
  
  Time complexity: O(n^2)
*/


function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    for (let i = 0; i < n - 1; i++) {
        swapped = false; // Reset swapped flag for this pass

        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap adjacent elements if they are in the wrong order
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }

        // If no swaps were made, the array is already sorted
        if (!swapped) break;
    }
    return arr;
}

// Example usage:
const arr = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(arr)); // Output: [11, 12, 22, 25, 34, 64, 90]