const LinkedList = require('./LinkedList');

// creating a new Linked List
const list = LinkedList.fromValues(10, 20, 30, 40);

console.log(list.print());
list.removeHead();
console.log(list.print());

