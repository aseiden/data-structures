var Queue = function() {
  var newQueue = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  newQueue.enqueue = function(value) {
    storage[Object.keys(storage).length] = value;
  };

  newQueue.dequeue = function() {
    var output = storage[0];
    
    for (var i = 0; i < Object.keys(storage).length - 1; i++) {
      storage[i] = storage[i + 1];
    }

    delete storage[Object.keys(storage).length - 1];

    return output;
  };

  newQueue.size = function() {
    return Object.keys(storage).length;
  };

  return newQueue;
};
