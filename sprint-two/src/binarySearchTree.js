var BinarySearchTree = function(value) {
  var treeInstance = Object.create(BinarySearchTreeMethods);
  treeInstance.value = value;
  treeInstance.left;
  treeInstance.right;


  return treeInstance;
};

var BinarySearchTreeMethods = {
  insert: function(value) {
    if (this.value === value) {
      return true;
    } else if (this.value > value) {
      if (this.left === undefined) {
        this.left = BinarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    } else if (this.value < value) {
      if (this.right === undefined) {
        this.right = BinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    }
  },
  contains: function(value) {
    if (this.value === value) {
      return true;
    } else if (this.value > value) {
      if (this.left === undefined) {
        return false;
      } else {
        return this.left.contains(value);
      }
    } else if (this.value < value) {
      if (this.right === undefined) {
        return false;
      } else {
        return this.right.contains(value);
      }
    }
  }, 
  depthFirstLog: function(callBack) {
    callBack(this.value);
    if (this.left !== undefined) {
      this.left.depthFirstLog(callBack);
    }
    if (this.right !== undefined) {
      this.right.depthFirstLog(callBack);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 insert: O(log n)
 contains: O(log n)
 depthFirstLog: O(n)
 */
