class Queue {
    constructor() {
      this.items = [];
    }
  
    // Enqueue operation
    enqueue(element) {
      this.items.push(element);
    }
  
    // Dequeue operation
    dequeue() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items.shift();
    }
  
    // Peek operation (view the first element)
    peek() {
      return this.items[0];
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Size of the queue
    size() {
      return this.items.length;
    }
}

module.exports = {
    Queue
}