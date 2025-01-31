const fs = require('fs');

/*
## Asteroid Collision

We are given an array asteroids of integers representing asteroids in a row. The indices of the asteriod in the array represent their relative position in space.

For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

Example 1:
Input: asteroids = [5,10,-5]
Output: [5,10]
Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.

Example 2:
Input: asteroids = [8,-8]
Output: []
Explanation: The 8 and -8 collide exploding each other.

Example 3:
Input: asteroids = [10,2,-5]
Output: [10]
Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.
 
Constraints:
2 <= asteroids.length <= 104
-1000 <= asteroids[i] <= 1000
asteroids[i] != 0
*/

var asteroidCollision = function(asteroids) {
    let stack = [];
    for(let i=0; i<asteroids.length; i++) {
        function check(num) {    
            if(num >= 0) stack.push(num);
            else if(num < 0 && stack.length == 0) stack.push(num);
            else if(num < 0 && stack[stack.length-1] < 0) stack.push(num);
            else {
                let temp = stack.pop();
                if(Math.abs(temp) < Math.abs(num)) {
                    check(num);
                } else if(Math.abs(temp) > Math.abs(num)) {
                    stack.push(temp);
                }
            }
        }
        check(asteroids[i]);
    }
    return stack;
};







// Custom logging function that writes to output.txt and moves to the next line
function customLog(message) {
    fs.appendFile('output.txt', message + '\n', (err) => {
        if (err) {
            console.error('Error writing to output.txt:', err);
        }
    });
}

// Read input from input.txt
fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading input file:', err);
        return;
    }

    // Call your function with the input data
    const input = JSON.parse(data.trim());

    // Call your function with the input data
    const result = asteroidCollision(input);

    // Append the result to output.txt instead of overwriting
    fs.appendFile('output.txt', JSON.stringify(result) + '\n', (err) => {
        if (err) {
            console.error('Error writing output file:', err);
        } else {
            console.log('Output written to output.txt');
        }
    });
});