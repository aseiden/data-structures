var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.tail === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    var newHead = list.head.next;
    var oldHeadValue = list.head.value;
    list.head = newHead;
    return oldHeadValue;
  };

  list.contains = function(target) {
    var searchNodes = function(target, node) {
      if (node.value === target) {
        return true;
      } else {
        if (node.next) {
          return searchNodes(target, node.next);
        } else {
          return false;
        }
      }
    };

    return searchNodes(target, list.head);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
 // addtoTail: constant O(1)
 // removeHead: constant O(1)
 // contains: linear O(n)
