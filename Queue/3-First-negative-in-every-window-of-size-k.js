function firstNegativeInEveryWindow(arr, k) {
    let result = [];
    let deque = []; 

    for (let i = 0; i < k; i++) {
        if (arr[i] < 0) deque.push(i);
    }

    for (let i = k; i <= arr.length; i++) {
        result.push(deque.length > 0 ? arr[deque[0]] : 0);

        // Remove elements that are out of this window
        if (deque.length > 0 && deque[0] <= i - k) {
            deque.shift();
        }

        // Add current element if it's negative
        if (i < arr.length && arr[i] < 0) {
            deque.push(i);
        }
    }

    return result;
}

// Example Usage
let arr = [12, -1, -7, 8, -15, 30, 16, 28];
let k = 3;
console.log(firstNegativeInEveryWindow(arr, k)); 
// Output: [-1, -1, -7, -15, -15, 0]







// Brute force:
function firstNegativeInEveryWindow(arr, k) {
    let result = [];
    let deque = [];

    // Process first k elements
    for (let i = 0; i < arr.length; i++) {
        if((deque.length + 1) > k){
            deque.shift();
        }
        
        deque.push(i);
        
        let j = 0;
        while(j<deque.length && arr[deque[j]] >= 0){
            j++;
        }
        
        if(deque.length === k){
            if(j<deque.length) result.push(arr[deque[j]]);
            else result.push(0);   
        }
        
        console.log(deque, j)
    }

    return result;
}