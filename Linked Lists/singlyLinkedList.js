class Node {
  // constructor args are kinda like normal function args
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //   Define methods outside of constructor
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    // Hmm still need returns on a class
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    // newTail is always one behind current

    // Traversal loop
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    // still need to sever this connection
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let current = this.head;
    this.head = current.next;
    this.length--;
    return current;
  }
  unShift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }
  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== idx) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(idx, val) {
    let foundNode = this.get(idx);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(idx, val) {
    let newNode = new Node(val);

    // Double not NOT NOT converts these returns to their truthy or falsy values
    if (idx < 0 || idx >= this.length) return false;
    if (idx === this.length) !!this.push(val);
    if (idx === 0) !!this.unShift(val);

    let prevNode = this.get(idx - 1);
    let tempNode = prevNode.next;
    prevNode.next = newNode;
    newNode.next = tempNode;
    this.length++;
    return true;
  }

  remove(idx, val) {
    if (idx < 0 || idx >= this.length) return undefined;
    if (idx === this.length - 1) return this.pop();
    if (idx === 0) return this.shift();
    let prevNode = this.get(idx - 1);

    let returnNode = this.get(idx);
    prevNode.next = this.get(idx).next;
    this.length--;
    return returnNode;
  }

  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
  reverse() {
    // This just takes care of the initial swap
    // node = 100
    console.log('this.head before is:');
    console.log(this.head);
    var node = this.head;
    // now head is 999
    this.head = this.tail;
    // now tail is 100
    this.tail = node;

    console.log('this.head after is:');
    console.log(this.head);

    console.log('node after is:');
    console.log(node);

    var next;
    var prevNode = null;

    // It just runs 5 times?? (/length)
    for (let i = 0; i < this.length; i++) {
      // So this starts at the the original 0 index (node)
      // Then sets "next" to the value at index 1
      next = node.next;
      node.next = prevNode;
      prevNode = node;
      node = next;
    }
  }
}
let first = new Node('Hi');

let list = new SinglyLinkedList();

list.push(100);
list.push(201);
list.push(250);
list.push(350);
list.push(999);

// list.reverse();

// console.log(list.print());
console.log(list.reverse());
