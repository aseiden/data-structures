

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);

  for (var i = 0; i < this._limit; i++) {
    this._storage.set(i, []);
  }

};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  bucket.push([k, v]);
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
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


