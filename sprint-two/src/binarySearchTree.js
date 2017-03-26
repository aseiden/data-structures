var BinarySearchTree = function(value) {
  var treeInstance = Object.create(BinarySearchTreeMethods);
  treeInstance.value = value;
  treeInstance.left;
  treeInstance.right;
  treeInstance.leftDepth = 1;
  treeInstance.rightDepth = 1;
  treeInstance.isRebalancing = false;


  return treeInstance;
};

var BinarySearchTreeMethods = {
  insert: function(value) {
    var depth = 1;
    var direction = '';
    var createNode = function (isRoot) {
      if (this.value === value) {
        return true;
      } else if (this.value > value) {
        if (isRoot) { direction = 'leftDepth'; }
        
        if (this.left === undefined) {
          this.left = BinarySearchTree(value);
          depth++;
        } else {
          depth++;
          createNode.call(this.left, false);
        }
      } else if (this.value < value) {
        if (isRoot) { direction = 'rightDepth'; }

        if (this.right === undefined) {
          this.right = BinarySearchTree(value);
          depth++;
        } else {
          depth++;
          createNode.call(this.right, false);
        }
      }
    };
    createNode.call(this, true); 

    this[direction] = Math.max(this[direction], depth);

    if (!this.isRebalancing && (this.leftDepth / this.rightDepth > 2 || this.rightDepth / this.leftDepth > 2)) {
      this.rebalance();
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
  },
  rebalance: function() {
    var tempStorage = [];
    var tempStorageMiddleOut = [];

    this.depthFirstLog(function(node) {
      tempStorage.push(node);
    });

    console.log('temp storage pre-middle out', tempStorage);

    tempStorage = tempStorage.sort();

    var middleSort = function(array) {
      if (array.length === 1) {
        tempStorageMiddleOut.push(array[0]);
      } else if (array.length !== 0) {
        var pushIndex = Math.floor((array.length - 1) / 2);
        tempStorageMiddleOut.push(array[pushIndex]);
        middleSort(array.slice(0, pushIndex));
        middleSort(array.slice(pushIndex + 1));
      }
    };

    middleSort(tempStorage);
    
    console.log(tempStorageMiddleOut);

    this.value = tempStorageMiddleOut[0];
    this.isRebalancing = true;
    this.left = undefined;
    this.right = undefined;
    this.leftDepth = 1;
    this.rightDepth = 1;

    for (var i = 1; i < tempStorageMiddleOut.length; i++) {
      this.insert(tempStorageMiddleOut[i]);
    }

    this.isRebalancing = false;
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 insert: O(log n)
 contains: O(log n)
 depthFirstLog: O(n)
 */
