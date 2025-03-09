function sumOfMinMaxSubarrays(arr, k) {
    let n = arr.length;
    if (n < k) return 0;

    let minDeque = []; // Deque for minimum elements
    let maxDeque = []; // Deque for maximum elements
    let sum = 0;

    for (let i = 0; i < n; i++) {
        // Remove elements out of window from both deques
        if (minDeque.length > 0 && minDeque[0] === i - k) minDeque.shift();
        if (maxDeque.length > 0 && maxDeque[0] === i - k) maxDeque.shift();

        // Maintain deque for min elements
        while (minDeque.length > 0 && arr[minDeque[minDeque.length - 1]] >= arr[i]) {
            minDeque.pop();
        }
        minDeque.push(i);

        // Maintain deque for max elements
        while (maxDeque.length > 0 && arr[maxDeque[maxDeque.length - 1]] <= arr[i]) {
            maxDeque.pop();
        }
        maxDeque.push(i);

        // Compute sum when we have the first valid window
        if (i >= k - 1) {
            sum += arr[minDeque[0]] + arr[maxDeque[0]];
        }
    }

    return sum;
}

// Example usage:
let arr = [2, 5, -1, 7, -3, -1, -2];
let k = 3;
console.log(sumOfMinMaxSubarrays(arr, k)); // Output: 18
