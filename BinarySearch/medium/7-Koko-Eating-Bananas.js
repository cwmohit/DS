/*
## Koko Eating Bananas

Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

Return the minimum integer k such that she can eat all the bananas within h hours.

Example 1:
Input: piles = [3,6,7,11], h = 8
Output: 4

Example 2:
Input: piles = [30,11,23,4,20], h = 5
Output: 30

Example 3:
Input: piles = [30,11,23,4,20], h = 6
Output: 23
 
Constraints:
1 <= piles.length <= 104
piles.length <= h <= 109
1 <= piles[i] <= 109
*/

// Apporach 1 (recommended and best)
var minEatingSpeed = function (piles, h) {
    let low = 1;
    let high = Math.max(...piles);

    function calculateTotalHours(piles, hourly) {
        let totalH = 0;
        let n = piles.length;
        for (let i = 0; i < n; i++) {
            totalH += Math.ceil(piles[i] / hourly);
        }
        return totalH;
    }

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let totalH = calculateTotalHours(piles, mid);
        if (totalH <= h) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return low;
};



// Approach 2 
function calculateTotalHours(v, hourly) {
    let totalH = 0;
    let n = v.length;
    // Find total hours
    for (let i = 0; i < n; i++) {
        totalH += Math.ceil(v[i] / hourly);
    }
    return totalH;
}

function minimumRateToEatBananas(v, h) {
    let maxi = Math.max(...v);

    // Find the minimum value of k
    for (let i = 1; i <= maxi; i++) {
        let reqTime = calculateTotalHours(v, i);
        if (reqTime <= h) {
            return i;
        }
    }

    return maxi;
}