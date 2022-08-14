class MaxBinaryHeap {
  // A heap where the highest value is at the top
  constructor() {
    this.values = [];
  }
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    let index = this.values.length - 1;
    // This supplants the need for a temp
    const element = this.values[idx];

    // I need to grok while true a little better
    while (true) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  // I feel like the different methods of swapping
  extractMax() {
    // 1. Swap last and first element
    // 2. Assuming this element is smaller than it's children,
    // Check which of first elements children is larger and swap with that (so that the larger element is further up in the tree)
    // Repeat the above step assuming this node is smaller than it's children'

    // Swap was a misnomer here since one is just being removed
    let max = this.values[0];
    let end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }
  sinkDown() {
    let idx = 0;
    let length = this.values.length;
    let element = this.values[0];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      // we have these < lengths to check for elements in bounds
      if (leftChildIdx < length) {
        // Set the left child for this loop
        leftChild = this.values[leftChildIdx];
        // Keep track of the swap without executing it yet
        if (leftChild > element) swap = leftChildIdx;
      }
      if (rightChildIdx < length) {
        // Set the left child for this loop
        rightChild = this.values[rightChildIdx];

        // Make sure swap has happened and if so that the right is larger than left
        if ((!swap && rightChild > element) || (swap !== null && rightChild > leftChild)) {
        }
        swap = rightChildIdx;
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

//
