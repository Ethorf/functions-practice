
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  //   We can think of a queue as the highest priority being at the left side of the
  // So lower index = higher priority
  enqueue(val) {
    // Push starts at the end
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue(val) {
    // Shift removes the from the beginning
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}
