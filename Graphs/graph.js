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
