var Stack = function() {
  var someInstance = Object.create(stackMethods);

  // Use an object with numeric keys to store values
  someInstance.storage = {};
  someInstance.topKey = 0;

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
