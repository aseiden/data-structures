var HashTable = function() {
  this._limit = 8;
  this._tupleCount = 0;
  this._isResizing = false;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  
  bucket ? bucket.push([k, v]) : this._storage.set(index, [[k, v]]);
  this._tupleCount++;
 
  if (this._limit * .75 < this._tupleCount && !this._isResizing) {
    this.resize('expand');
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var output;
  
  bucket.forEach(function (tuple) {
    if (tuple[0] === k) {
      output = tuple[1];
    }
  });
  
  return output;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var tupleIndex;

  bucket.forEach(function (tuple, i) {
    if (tuple[0] === k) {
      tupleIndex = i;
    }
  });

  bucket.splice(tupleIndex, 1);
  
  this._tupleCount--;
  if (this._limit * .25 > this._tupleCount && this._tupleCount > 0) {
    this.resize('contract');
  }
};

HashTable.prototype.resize = function(direction) {
  var tempStorage = [];
  this._isResizing = true;


  this._storage.each(function(bucket, index, hashStorage) {
    if (Array.isArray(bucket)) {
      bucket.forEach(function(tuple, index, bucket) {
        tempStorage.push(tuple);
      });
    }
  });
  
  if (direction === 'expand') {
    this._limit = this._limit * 2; 
  } else {
    this._limit = Math.max(this._limit / 2, 1);
  }

  this._storage = LimitedArray(this._limit);

  this._tupleCount = 0;

  for (var i = 0; i < tempStorage.length; i++) {
    this.insert(tempStorage[i][0], tempStorage[i][1]);
  }
  
  this._isResizing = false;
};

/*
 * Complexity: What is the time complexity of the above functions?
 insert: constant
 retrieve: constant
 remove: constant
 resize: linear
 */


