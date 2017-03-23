var Stack = function() {
  this.topKey = 0;
  this.storage = {};
};

Stack.prototype.size = function() {
  return this.topKey;
};

Stack.prototype.push = function(value) {
  this.storage[this.topKey] = value;
  this.topKey++;
};

Stack.prototype.pop = function() {
  if (this.topKey > 0) {
    var top = this.storage[this.topKey - 1];
    delete this.storage[this.topKey - 1];
    this.topKey--;
    return top;
  }
};