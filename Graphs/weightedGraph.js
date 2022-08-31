const path = require('node:path/win32');

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
  dequeue() {
    // Shift removes the from the beginning
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight });
    this.adjacencyList[v2].push({ node: v1, weight });
  }
  dijkstra(start, finish) {
    // Nodes is kind of the opposite of visited?
    const nodes = new PriorityQueue();
    // Previous is a dumb name it should be like the last fastest path
    let previous = {};
    let distances = {};
    let path = [];
    let smallest;

    // Build initial state
    // Loop through all vertexes, rember that for - in is keys
    // Octopusses are foreign, they are also inky

    for (let vertex in this.adjacencyList) {
      if (vertex == start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      // This is essentially the initial populating of the previous obj
      previous[vertex] = null;
    }
    // As long as our PQ has values keep doing stuff
    while (nodes.values.length) {
      // we need the val because it's also got a priority prop
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        // only build up path at the end of calculations
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbour in this.adjacencyList[smallest]) {
          // Find neighbouring node
          let nextNode = this.adjacencyList[smallest][neighbour];
          // calculate new distance to neighbouring node
          // weight = distance
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbour = nextNode.node;
          if (candidate < distances[nextNeighbour]) {
            // updating new smallest distance to neighbour
            distances[nextNeighbour];
            // updating pevious - how we got to neighbour
            previous[nextNeighbour] = smallest;
            // enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbour, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

let g = new WeightedGraph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');
