function towerOfHanoi(n, fromRod, toRod, auxRod) {
  if (n === 1) {
    console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
    return 1; // Base case: 1 move
  }

  let count = 0;

  count += towerOfHanoi(n - 1, fromRod, auxRod, toRod); // Moves from source to auxiliary
  count++; console.log(`Move disk ${n} from ${fromRod} to ${toRod}`); // Count the current move
  count += towerOfHanoi(n - 1, auxRod, toRod, fromRod); // Moves from auxiliary to destination

  return count;
}

// Example usage: Move 3 disks from A to C using B as auxiliary
const moves = towerOfHanoi(3, "A", "C", "B");
console.log(`Total moves: ${moves}`);

/*

             -|-
__|___-|-____-|-_____

*/
