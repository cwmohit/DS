class NStacks {
  constructor(stackCount, capacity) {
    this.stackCount = stackCount;
    this.capacity = capacity;
    this.arr = new Array(stackCount * capacity).fill(null);
    this.top = new Array(stackCount).fill(-1); // Store top indices of each stack
  }

  push(stackNum, value) {
    if (this.top[stackNum] + 1 < this.capacity) {
      this.top[stackNum]++;
      this.arr[stackNum * this.capacity + this.top[stackNum]] = value;
    } else {
      throw new Error(`Stack ${stackNum} is full`);
    }
  }

  pop(stackNum) {
    if (this.top[stackNum] >= 0) {
      const index = stackNum * this.capacity + this.top[stackNum];
      const value = this.arr[index];
      this.arr[index] = null;
      this.top[stackNum]--;
      return value;
    }
    throw new Error(`Stack ${stackNum} is empty`);
  }

  peek(stackNum) {
    if (this.top[stackNum] >= 0) {
      return this.arr[stackNum * this.capacity + this.top[stackNum]];
    }
    throw new Error(`Stack ${stackNum} is empty`);
  }

  isEmpty(stackNum) {
    return this.top[stackNum] === -1;
  }
}

// Example Usage:
const stacks = new NStacks(3, 5);
stacks.push(0, 10);
stacks.push(1, 20);
stacks.push(2, 30);
console.log(stacks.pop(1)); // 20
console.log(stacks.peek(0)); // 10
