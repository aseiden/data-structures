var Queue = function() {
  var queueInstance = {};
  queueInstance.storage = {};

  _.extend(queueInstance, queueMethods);

  return queueInstance;
};

var queueMethods = {
  enqueue: function (value) {
    this.storage[Object.keys(this.storage).length] = value;
  },
  dequeue: function () {
    var output = this.storage[0];

    for (var i = 0; i < Object.keys(this.storage).length - 1; i++) {
      this.storage[i] = this.storage[i + 1];
    }
    delete this.storage[Object.keys(this.storage).length - 1];

    return output;
  },
  size: function () { 
    return Object.keys(this.storage).length;
  }
};


