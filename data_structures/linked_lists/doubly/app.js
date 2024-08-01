const DoublyLinkedList = require('./DoubleLinkedList');

const list = new DoublyLinkedList();

list.insertAtHead(4);
list.insertAtHead(3);
list.insertAtHead(2);
list.insertAtHead(1);
console.log('----------------------------');
console.log(list.print());
console.log('LENGTH: ', list.length)
console.log('HEAD: ', list.head.val);
console.log('TAIL: ', list.tail.val);

list.insertAtTail(5);

console.log('----------------------------');
console.log(list.print());
console.log('LENGTH: ', list.length)
console.log('HEAD: ', list.head.val);
console.log('TAIL: ', list.tail.val);

list.insertAtIndex(10, 2);

console.log('----------------------------');
console.log(list.print());
console.log('LENGTH: ', list.length)