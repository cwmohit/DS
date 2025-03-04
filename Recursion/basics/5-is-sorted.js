function isSorted(arr, index = 0) {
  if (index === arr.length - 1) return true; // Base case: reached the end

  if (arr[index] > arr[index + 1]) return false; // If the current element is greater than the next, not sorted

  return isSorted(arr, index + 1); // Recursive call to check the next pair
}

// Example usage
console.log(isSorted([1, 2, 3, 4, 5])); // true
console.log(isSorted([1, 3, 2, 4, 5])); // false
console.log(isSorted([10, 20, 30, 40])); // true
console.log(isSorted([5, 4, 3, 2, 1])); // false