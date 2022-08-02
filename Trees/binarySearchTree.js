class Node {
  // constructor args are kinda like normal function args
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  // DO THIS RECURSIVELY
  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      // Current is kind of in flux all the time but used as the pointer to where we are in the tree
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        // Left side
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
          //  Right Side
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  insertRecursive(value) {
    const node = new Node(value);
    if (!this.root) {
      this.root = node;
      return this;
    }

    const inserted = (value, current = this.root) => {
      if (value > current.value) {
        if (!current.right) {
          current.right = node;
        } else return inserted(value, current.right);
      } else {
        if (!current.left) {
          current.left = node;
        } else return inserted(value, current.left);
      }
      return this;
    };
    return inserted(data);
  }
  find(value) {
    if (!this.root) return false;
    let current = this.root;
    let found = false;

    while (!found && current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
  BFS() {
    let node = this.root;
    let data = [];
    let q = [];
    q.push(node);
    // Random note, if you negate an empty array in javascript, it's still truthy.
    while (q.length) {
      node = q.shift();
      data.push(node);
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
    return data;
  }

  BFSRecursive(queue = [this.root], data = []) {
    // They love these default params
    const [node] = queue;

    if (!node) return data;
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);

    queue.shift();
    data.push(node.value);

    return this.BFS(queue, data);
  }
}

// BST's are usually o(log n) but not guaranteed

let tree = new BinarySearchTree();

tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right(9);
