var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var topKey = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[topKey] = value;
    topKey++;
  };

  someInstance.pop = function() {
    if (topKey > 0) {
      var top = storage[topKey - 1];
      delete storage[topKey - 1];
      topKey--;
      return top;
    }
  };

  someInstance.size = function() {
    return topKey;
  };

  return someInstance;
};
