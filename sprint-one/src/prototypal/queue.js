var Queue = function() {

  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  newQueue.head = 0;
  newQueue.tail = 0;

  return newQueue;
};

queueMethods = {};

queueMethods.size = function() {
  return this.tail - this.head;
};

queueMethods.enqueue = function(value) {
  this.storage[this.tail] = value;
  this.tail++;
};

queueMethods.dequeue = function() {
  if (this.size() > 0) {
    var output = this.storage[this.head];
    this.head++;
    return output;
  }
};


