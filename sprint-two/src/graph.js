
var Graph = function() {
  this.nodes = {};
};

Graph.prototype.addNode = function(node) {
  var newNode = {};
  newNode.value = node;
  //newNode.edges = [];
  newNode.edges = {};
  this.nodes[node] = newNode;
};

Graph.prototype.contains = function(node) {
  return this.nodes.hasOwnProperty(node);
};

Graph.prototype.removeNode = function(node) {
  var edges = this.nodes[node].edges;
  var thisGraph = this;
  _.each(edges, function(edge) {
    thisGraph.removeEdge(node, edge);
  });
  delete this.nodes[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.nodes[fromNode].edges.hasOwnProperty(toNode);
};

Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].edges[toNode] = toNode;
  this.nodes[toNode].edges[fromNode] = fromNode;
};

Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.nodes[fromNode].edges[toNode];
  delete this.nodes[toNode].edges[fromNode];
};

Graph.prototype.forEachNode = function(cb) {
  for (var node in this.nodes) {
    cb(node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 addnode: constant O(1)
 contains: constant O(1)
 removeNode: linear O(n)
 hasEdge: linear O(1)
 addEdge: constant O(1)
 removEdge: linear O(1)
 forEachNode: linear O(n)
 */



