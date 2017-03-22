var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
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