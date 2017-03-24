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
  
  var searchTree = function (node, target) {
    if (node.value === target) {
      output = true;
    } else {
      _.each(node.children, function (child) {
        searchTree(child, target);
      });
    }
  };

  searchTree(this, target);
  return output;  
};



/*
 * Complexity: What is the time complexity of the above functions?
 addChild: constant - O(1)
 contains: linear - O(n)
 */
