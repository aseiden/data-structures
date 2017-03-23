var Queue = function() {
  this.head = 0;
  this.tail = 0;
  this.storage = {};
};

Queue.prototype.size = function () {
  return this.tail - this.head;
};

Queue.prototype.enqueue = function (value) {
  this.storage[this.tail] = value;
  this.tail++;
};

Queue.prototype.dequeue = function () {
  if (this.size() > 0) {
    var output = this.storage[this.head];
    this.head++;
    return output;
  }
};
