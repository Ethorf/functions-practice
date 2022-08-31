class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((x) => x !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v1].filter((x) => x !== v1);
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
  DFTRecursive(vertex) {
    // Depth first in this context means pick a starting node and visit one of it's neighbours, and then all that nodes neighbours etc before returning to start node
    let results = [];
    let visited = {};
    // This solves the scoping problem with "this"
    const adjacencyList = this.adjacencyList;
    // Nested recursive helper functions can help
    //  with persistent data throught the function
    (function helper(v) {
      if (!v) return null;
      visited[v] = true;
      results.push(v);
      adjacencyList[v].map((x) => {
        if (!visited[x]) helper(x);
      });
    })(vertex);

    return results;
  }

  DFTIterative(start) {
    let s = [start];
    let visited = {};
    visited[start] = true;
    let result = [];
    let currVertex;

    while (s.length) {
      currVertex = s.pop();
      result.push(currVertex);
      this.adjacencyList[currVertex].map((x) => {
        if (!visted[x]) {
          visited[x] = true;
        }
      });
    }
    return result;
  }
  BFT(start) {
    // REMINDER - Queue's are first in first out
    // Breadth first in this context means visit all of a vertex's neighbours first before visiting it's neighbours neighbours
    let q = [start];
    let result = [];
    let visited = {};
    let currVertex;

    while (q.length) {
      currVertex = q.shift();
      result.push(currVertex);
      this.adjacencyList[currVertex].map((neighbour) => {
        if (!visted[neighbour]) {
          visited[neighbour] = true;
          q.push(neighbour);
        }
      });
    }

    return result;
  }
}

let g = new Graph();
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

console.log(g.DFTRecursive('A'));
