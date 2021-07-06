'use strict';

// const myLinkedList2 = {
//   head: {
//     value: 10,
//     next: {
//       value: 16,
//       next: {
//         value: 8,
//         next: null,
//       },
//     },
//   },
// };

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);

    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }

  insert(index, value) {
    if (typeof index !== 'number') return;

    if (index >= this.length) {
      // Add to the end of the Linked List
      return this.append(value);
    }

    if (index === 0) {
      // Add to the start of Linked List
      return this.prepend(value);
    }

    const newNode = new Node(value);

    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;

    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;

    return this;
  }

  traverseToIndex(index) {
    if (typeof index !== 'number') return;

    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  remove(index) {
    // CHECK PARAMS
    // prettier-ignore
    if (typeof index !== 'number' || index >= this.length || Math.sign(index) === -1) return;

    if (index === 0) {
      const currentNode = this.traverseToIndex(index);
      const holdingPointer = currentNode.next;
      this.head = holdingPointer;
      this.length--;

      const lastElement = this.traverseToIndex(this.length - 1);
      this.tail = lastElement;

      return this;
    }

    const leader = this.traverseToIndex(index - 1);
    const nextHoldingPointer = leader.next.next;
    leader.next = nextHoldingPointer;
    this.length--;

    const lastElement = this.traverseToIndex(this.length - 1);
    this.tail = lastElement;

    return this;
  }

  reverse2() {
    if (!this.head.next) {
      return this;
    }

    let first = this.head;
    this.tail = first;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }

    this.head.next = null;
    this.head = first;

    return this;
  }

  reverse() {
    let previousPointer = null;
    let current = this.head;
    this.tail = current;
    let nextPointer;

    while (current) {
      nextPointer = current.next;
      current.next = previousPointer;

      previousPointer = current;
      current = nextPointer;
    }

    this.head = previousPointer;
    return this;
  }
}

////////////////////////////////
////////////////////////////////
class DoublyNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new DoublyNode(value);
    this.tail = this.head;

    this.length = 1;
  }

  append(value) {
    const newNode = new DoublyNode(value);

    this.tail.next = newNode;
    newNode.previous = this.tail;
    this.tail = newNode;
    this.length++;

    return this;
  }

  prepend(value) {
    const newNode = new DoublyNode(value);

    newNode.next = this.head;
    this.head.previous = newNode;
    this.head = newNode;
    this.length++;

    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }

  insert(index, value) {
    if (index >= this.length) return this.append(value);
    if (index === 0) return this.prepend(value);

    const newNode = new DoublyNode(value);
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;

    leader.next = newNode;
    holdingPointer.previous = newNode;
    newNode.next = holdingPointer;
    newNode.previous = leader;
    this.length++;

    return this;
  }

  traverseToIndex(index) {
    if (typeof index !== 'number') return;

    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  remove(index) {
    // prettier-ignore
    if (typeof index !== 'number' || index >= this.length || Math.sign(index) === -1) return;

    if (index === 0) {
      const currentNode = this.traverseToIndex(index);
      const holdingPointer = currentNode.next;
      holdingPointer.previous = null;
      this.head = holdingPointer;
      this.length--;

      const lastElement = this.traverseToIndex(this.length - 1);
      this.tail = lastElement;

      return this;
    }

    if (index === this.length - 1) {
      const currentNode = this.traverseToIndex(index);
      const previousPointer = currentNode.previous;
      previousPointer.next = null;
      this.tail = previousPointer;
      this.length--;

      return this;
    }

    const leader = this.traverseToIndex(index - 1);
    const nextHoldingPointer = leader.next.next;
    leader.next = nextHoldingPointer;
    nextHoldingPointer.previous = leader;
    this.length--;

    const lastElement = this.traverseToIndex(this.length - 1);
    this.tail = lastElement;

    return this;
  }

  reverse() {
    let pointer1 = this.head;
    this.tail = pointer1;
    let pointer2 = pointer1.next;

    pointer1.next = null;
    pointer1.previous = pointer2;

    while (pointer2 !== null) {
      pointer2.previous = pointer2.next;
      pointer2.next = pointer1;

      pointer1 = pointer2;
      pointer2 = pointer2.previous;
    }

    this.head = pointer1;
    return this;
  }
}
