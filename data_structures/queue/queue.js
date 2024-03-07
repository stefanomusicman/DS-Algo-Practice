// This will be a basic implementation of a queue

// A queue will have essentially 2 methods: Enqueue and Dequeue
// - Enqueue: Add an element at the end of the queue
// - Dequeue: Remove the first element of the queue

class Queue {
    constructor() {
        this.list = [];
    }

    Enqueue(item) {
        this.list = [...this.list, item];
    }

    Dequeue() {
        let newList = [];

        for (let i = 1; i < this.list.length; i++) {
            newList.push(this.list[i]);
        }

        this.list = newList;
    }
}

queue = new Queue();
queue.Enqueue(1);
queue.Enqueue(2);
queue.Enqueue(3);
queue.Enqueue(4);
console.log(queue.list);

queue.Dequeue();
queue.Dequeue();

console.log(queue.list);