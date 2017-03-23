var Stack = function() {
  var newStack = {};
  
  newStack.storage = {};
  newStack.topKey = 0;
  _.extend(newStack, stackMethods);

  return newStack;
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


