class CircularQueue {
    constructor(size) {
      this.queue = new Array(size);
      this.size = size;
      this.front = -1;
      this.rear = -1;
    }
  
    isEmpty() {
      return this.front === -1;
    }
  
    isFull() {
      return (this.rear + 1) % this.size === this.front;
    }
  
    enqueue(value) {
      if (this.isFull()) {
        console.log("Queue is full");
        return;
      }
      if (this.isEmpty()) {
        this.front = 0;
      }
      this.rear = (this.rear + 1) % this.size;
      this.queue[this.rear] = value;
    }
  
    dequeue() {
      if (this.isEmpty()) {
        console.log("Queue is empty");
        return;
      }
      const removedValue = this.queue[this.front];
      if (this.front === this.rear) {
        this.front = this.rear = -1;
      } else {
        this.front = (this.front + 1) % this.size;
      }
      return removedValue;
    }
  
    peek() {
      if (this.isEmpty()) {
        console.log("Queue is empty");
        return;
      }
      return this.queue[this.front];
    }
  
    display() {
      if (this.isEmpty()) {
        console.log("Queue is empty");
        return;
      }
      let i = this.front;
      let elements = [];
      while (true) {
        elements.push(this.queue[i]);
        if (i === this.rear) break;
        i = (i + 1) % this.size;
      }
      console.log("Queue: ", elements.join(" <- "));
    }
  }
  
  // Example usage:
  const cq = new CircularQueue(5);
  cq.enqueue(10);
  cq.enqueue(20);
  cq.enqueue(30);
  cq.enqueue(40);
  cq.enqueue(50);
  cq.display(); // Queue: 10 <- 20 <- 30 <- 40 <- 50
  
  console.log("Dequeued:", cq.dequeue()); // Dequeued: 10
  cq.enqueue(60);
  cq.display(); // Queue: 20 <- 30 <- 40 <- 50 <- 60