// THIS IS RESPONSIBLE FOR CREATED A NEW NODE
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // ADD A NODE TO THE BEGINNING OF THE LIST
    insertAtHead(data) {
        if (this.head === null) {
            const newNode = new DoublyNode(data, null, null);
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return;
        }

        const newDoublyNode = new DoublyNode(data, null, this.head);

        this.head.prev = newDoublyNode;

        this.head = newDoublyNode;

        this.length++;
    }

    // ADD A NODE AT THE END OF THE LIST
    insertAtTail(data) {
        if (this.tail === null) {
            const newNode = new DoublyNode(data, null, null);
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return;
        }

        const newNode = new DoublyNode(data, this.tail, null);

        this.tail.next = newNode;

        this.tail = newNode;

        this.length++;
    }

    insertAtIndex(value, index) {
        if (index < 0 || index >= this.length) {
            return;
        } else if (index === 0) {
            this.insertAtHead(value);
        } else if (index === this.length - 1) {
            this.insertAtTail(value);
        } else {
            let current = this.head;
            for (let i = 0; i < index; i++) {
                if (i === index - 1) {
                    const newNode = new DoublyNode(value, current.prev, current);

                    current.prev.next = newNode;

                    current.prev = newNode;

                    this.length++;

                    return;
                }
                current = current.next;
            }
        }
    }

    print() {
        let output = '';
        let current = this.head;

        for (let i = 0; i < this.length; i++) {
            if (i === 0) {
                output += `null <-> ${current.val} <->`;
                current = current.next;
            } else if (i === this.length - 1) {
                output += ` ${current.val} <-> null`;
            } else {
                output += ` ${current.val} <->`;
                current = current.next;
            }
        }

        return output;
    }
}

class DoublyNode {
    constructor(val, prev, next) {
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}

module.exports = DoublyLinkedList;