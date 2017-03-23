var Stack = function() {
  var newStack = {};


  var storage = {};
  var topKey = 0;

  // Implement the methods below
  newStack.push = function(value) {
    storage[topKey] = value;
    topKey++;
  };

  newStack.pop = function() {
    if (topKey > 0) {
      var top = storage[topKey - 1];
      delete storage[topKey - 1];
      topKey--;
      return top;
    }
  };

  newStack.size = function() {
    return topKey;
  };

  return newStack;
};
