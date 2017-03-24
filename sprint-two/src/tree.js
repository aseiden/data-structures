var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);

  newTree.children = []; 

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var output = false;

  this.depthFirst(function(node) {
    if (node.value === target) {
      output = true;
    }
  });

  return output;  
};

treeMethods.depthFirst = function(cb) {
  cb(this);

  _.each(this.children, function(child) {
    child.depthFirst(cb);
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 addChild: constant - O(1)
 contains: linear - O(n)
 depthFirst: linear
 */
