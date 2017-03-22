var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = {};
  someInstance.topKey = 0;
  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.topKey] = value;
    this.topKey++;
  },
  pop: function() {
    if (this.topKey > 0) {
      var top = this.storage[this.topKey - 1];
      delete this.storage[this.topKey - 1];
      this.topKey--;
      return top;
    }
  },
  size: function() {
    return this.topKey;
  }
};


