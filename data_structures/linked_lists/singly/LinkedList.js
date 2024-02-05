// This is responsible for creating a new Linked List
class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    // method for inserting an item at the beginning of the List
    insertAtHead(data) {
        // create the new Node and pass in the value to be stored and pass in the current head which will then become the next node
        const newNode = new LinkedListNode(data, this.head);

        // assign the newly created node as the current head
        this.head = newNode;

        // increment the count of the list in order to keep track
        this.length++;
    }

    // method for getting the element inside of a list via an index
    getByIndex(index) {
        if (index < 0 || index >= this.length) {
            return null;
        } else if (index === 0) {
            return this.head;
        } else {
            let current = this.head;

            for (let i = 0; i < index; i++) {
                current = current.next;
            }

            return current;
        }
    }

    // method for verifying whether or not a value is being stored in the list
    verifyItem(item) {
        let current = this.head;
        let status = false;

        for (let i = 0; i < this.length; i++) {
            if (current.value === item) {
                status = true;
                break;
            }
            current = current.next;
        }

        return status;
    }

    // method for inserting a new item by a given index
    insertAtIndex(index, value) {
        if (index < 0 || index >= this.length) {
            return;
        } else if (index === 0) {
            this.insertAtHead(value);
        } else {
            let previousIndex = this.getByIndex(index - 1);

            previousIndex.next = new LinkedListNode(value, previousIndex.next);
            this.length++;
        }
    }

    // method for removing head
    removeHead() {
        this.head = this.head.next;
        this.length--;
    }

    // method for removing last item in the list
    removeLastItem() {
        let lastItem = this.getByIndex(this.length - 1);
        let secondToLastItem = this.getByIndex(this.length - 2);

        secondToLastItem.next = lastItem.next;
        this.length--;
    }

    // method for deleting an item at a given index
    deleteAtIndex(index) {
        if (index < 0 || index >= this.length) {
            return;
        } else if (index === 0) {
            this.removeHead();
        } else if (index === this.length - 1) {
            this.removeLastItem();
        } else {
            let previousIndex = this.getByIndex(index - 1);

            previousIndex.next = previousIndex.next.next;
            this.length--;
        }
    }

    // method for printing out the list in more visual format
    print() {
        let output = '';
        let current = this.head;

        for (let i = 0; i < this.length; i++) {
            if (i === this.length - 1) {
                output += `${current.value} -> null`;
            } else {
                output += `${current.value} -> `;
                current = current.next;
            }
        }

        return output;
    }
}

// This is responsible for creating a node (item) inside of a Linked List
class LinkedListNode {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

// This is a function that will be responsible for creating a Linked List to make testing easier
LinkedList.fromValues = function (...values) {
    const list = new LinkedList();

    for (let i = values.length - 1; i >= 0; i--) {
        list.insertAtHead(values[i]);
    }

    return list;
}

module.exports = LinkedList;