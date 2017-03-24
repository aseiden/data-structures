
var Graph = function() {
  this.nodes = {};
};

Graph.prototype.addNode = function(node) {
  var newNode = {};
  newNode.value = node;
  newNode.edges = [];
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
  return this.nodes[fromNode].edges.includes(toNode);
};

Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].edges.push(toNode);
  this.nodes[toNode].edges.push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode) {
  var fromNodeIndex = this.nodes[fromNode].edges.indexOf(toNode);
  var toNodeIndex = this.nodes[toNode].edges.indexOf(fromNode);
  
  this.nodes[fromNode].edges.splice(fromNodeIndex, 1);
  this.nodes[toNode].edges.splice(toNodeIndex, 1);
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
 removeNode: linear O(n) can be improved
 hasEdge: linear O(n) can be improved
 addEdge: constant O(1)
 removEdge: linear O(n) can be improved
 forEachNode: linear O(n)
 */



