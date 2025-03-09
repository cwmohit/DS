const fs = require('fs');
const { customLog } = require('../utils');
const { Queue } = require('./index');

/*
## Gas Station

There are some gas stations along a circular route. You are given two integer arrays gas[] denoted as the amount of gas present at each station and cost[] denoted as the cost of travelling to the next station. You have a car with an unlimited gas tank. You begin the journey with an empty tank from one of the gas stations. Return the index of the starting gas station if it's possible to travel around the circuit without running out of gas at any station in a clockwise direction. If there is no such starting station exists, return -1.
Note: If a solution exists, it is guaranteed to be unique.

Examples:
Input: gas[] = [4, 5, 7, 4], cost[]= [6, 6, 3, 5]
Output: 2
Explanation: It is possible to travel around the circuit from station at index 2.
Amount of gas at station 2 is (7 - 3) 4.
Amount of gas at station 3 is (4 + 4 - 5) 3.
Amount of gas at station 0 is (3 + 4 - 6) 1.
Amount of gas at station 1 is (1 + 5 - 6) 0.

Input: gas[] = [1, 2, 3, 4, 5], cost[] = [3, 4, 5, 1, 2]
Output: 3
Explanation: It is possible to travel around the circuit from station at index 3.
Amount of gas at station 3 is (4 - 1) 3.
Amount of gas at station 4 is (3 + 5 - 2) 6.
Amount of gas at station 0 is (6 + 1 - 3) 4.
Amount of gas at station 1 is (4 + 2 - 4) 2.
Amount of gas at station 2 is (2 + 4 - 5) 1.

Input: gas[] = [3, 9], cost[] = [7, 6]
Output: -1
Explanation: There is no gas station to start with such that you can complete the circuit.
Constraints:
1 ≤ gas.size(), cost.size() ≤ 106
1 ≤ gas[i], cost[i] ≤ 103
*/

var canCompleteCircuit = function(gas, cost) {
    let lostGas = 0; // prevTotalGasBeforeStart
    let currentTank = 0;
    let start = 0;
    
    for (let i = 0; i < gas.length; i++) {
        currentTank += gas[i] - cost[i];
        
        if (currentTank < 0) {
            lostGas+=currentTank;
            start = i + 1;
            currentTank = 0;
        }
    }
    
    return (lostGas+currentTank) >= 0 ? start : -1;
};

/*
(gas station, to reach ith+1 gas station cost (distance of ith+1 gas station))
(1,2)
(2,4)
(3,5)
(4,1)
(5,2)

To move gas station from ith to ith+1 will take ith cose
*/

customLog(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]))