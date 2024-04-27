/*

This will be a hash table which will store a linked list as a value to every key as opposed to an array of arrays

We will continue to use the same hashing function as we did in the previous implementation

*/

function hashStringToInt(s, tableSize) {
    // choose a PRIME number for the hash
    let hash = 17;

    for (let i = 0; i < s.length; i++) {
        hash = (13 * hash * s.charCodeAt(i)) % tableSize;
    }

    return hash;
}

// create a class which will represent an individual Node in the Linked List
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class HashTable {
    table = new Array(3001);

    numItems = 0;

    setItem(key, value) {
        this.numItems++;

        const index = hashStringToInt(key, this.table.length);

        if (this.table[index]) {
            let current = this.table[index];

            while (current != null) {
                if (current.next === null) {
                    current.next = new ListNode(value);
                    break;
                } else {
                    current = current.next;
                }
            }
        } else {
            this.table[index] = new ListNode(value);
        }
    }

    getItem(key) {
        const index = hashStringToInt(key, this.table.length);

        if (!this.table[index]) {
            return null;
        }

        let current = this.table[index];

        while (current != null) {
            if (current.next === null) {
                console.log(current.value);
            } else {
                console.log(`${current.value} -> `);
            }
            current = current.next;
        }
    }
}

const myTable = new HashTable();
myTable.setItem('firstName', 'john');
myTable.setItem('lastName', 'connor');
myTable.getItem('firstName');
myTable.getItem('lastName');