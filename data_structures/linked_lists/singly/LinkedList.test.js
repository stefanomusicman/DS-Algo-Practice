const LinkedList = require('./LinkedList');

describe('#insertAtHead', () => {
    test('adds an item at the beggining of the LinkedList', () => {
        const list = new LinkedList();
        list.insertAtHead(10);
        const originalHead = list.head;

        list.insertAtHead(20);

        expect(originalHead.value).toBe(10);
        expect(list.head.value).toBe(20);
        expect(list.head.next).toBe(originalHead);
        expect(list.length).toBe(2);
    })
})

describe('#getByIndex', () => {
    describe('with an index of less than 0', () => {
        test('it will return null', () => {
            const list = LinkedList.fromValues(10, 20);

            expect(list.getByIndex(-10)).toBeNull();
        })
    })

    describe('with an index is greater than the length of the list', () => {
        test('it will return null', () => {
            const list = LinkedList.fromValues(10, 20);

            expect(list.getByIndex(5)).toBeNull();
        })
    })

    describe('with an index of 0', () => {
        test('it will return the head', () => {
            const list = LinkedList.fromValues(10, 20);

            expect(list.getByIndex(0).value).toBe(10);
        })
    })

    describe('with an index in the middle of the list', () => {
        test('it will return a value', () => {
            const list = LinkedList.fromValues(10, 20, 30, 40);

            expect(list.getByIndex(2).value).toBe(30);
        })
    })
})

describe('#verifyItem', () => {
    describe('passing a value that is not being stored in the list', () => {
        test('it will return false', () => {
            const list = new LinkedList.fromValues(10, 20, 30);

            expect(list.verifyItem(50)).toBe(false);
        })
    })

    describe('passing a value that is being stored in the list', () => {
        test('it will return true', () => {
            const list = LinkedList.fromValues(10, 20, 30);

            expect(list.verifyItem(10)).toBe(true);
        })
    })
})

describe('#insertAtIndex', () => {
    describe('insert at index less than 0', () => {
        test('it will return null', () => {
            const list = LinkedList.fromValues(10, 20, 30);
            list.insertAtIndex(-10, 40)

            expect(list.length).toBe(3);
        })
    })

    describe('insert at index greater than length of list', () => {
        test('it will return null', () => {
            const list = LinkedList.fromValues(10, 20, 30);
            list.insertAtIndex(5, 40)

            expect(list.length).toBe(3);
        })
    })

    describe('insert at index 0', () => {
        test('it will insert at the head', () => {
            const list = LinkedList.fromValues(10, 20, 30);
            list.insertAtIndex(0, 40);

            expect(list.head.value).toBe(40);
            expect(list.head.next.value).toBe(10);
            expect(list.length).toBe(4);
        })
    })

    describe('insert in the middle of the list', () => {
        test('it will insert at the given index', () => {
            const list = LinkedList.fromValues(10, 20, 30);
            list.insertAtIndex(1, 40);

            expect(list.head.next.value).toBe(40);
            expect(list.length).toBe(4);
        })
    })
})

describe('#deleteAtIndex', () => {
    describe('removing at index less than 0', () => {
        test('it will not remove anything', () => {
            const list = LinkedList.fromValues(10, 20, 30);
            list.deleteAtIndex(-10);

            expect(list.length).toBe(3);
        })
    })

    describe('removing at index greater than length of list', () => {
        test('it will not remove anything', () => {
            const list = LinkedList.fromValues(10, 20, 30);
            list.deleteAtIndex(5);

            expect(list.length).toBe(3);
        })
    })

    describe('removing at index 0', () => {
        test('it will remove the head', () => {
            const list = LinkedList.fromValues(10, 20, 30);
            list.deleteAtIndex(0);

            expect(list.head.value).toBe(20);
            expect(list.length).toBe(2);
            expect(list.head.next.value).toBe(30);
        })
    })

    describe('removing element in the middle of the list', () => {
        test('it will remove the element at the given index', () => {
            const list = LinkedList.fromValues(10, 20, 30);
            list.deleteAtIndex(1);

            expect(list.head.value).toBe(10);
            expect(list.length).toBe(2);
            expect(list.head.next.value).toBe(30);
        })
    })
})

describe('#removeLastItem', () => {
    test('will remove the last item in the list', () => {
        const list = LinkedList.fromValues(10, 20, 30, 40);
        list.removeLastItem();

        expect(list.getByIndex(2).next).toBeNull();
        expect(list.length).toBe(3);
    })
})

describe('removeHead', () => {
    test('will remove the head from the list', () => {
        const list = LinkedList.fromValues(10, 20, 30, 40);
        list.removeHead();

        expect(list.head.value).toBe(20);
        expect(list.head.next.value).toBe(30);
        expect(list.length).toBe(3);
    })
})