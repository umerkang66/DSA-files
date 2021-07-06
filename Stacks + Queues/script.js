'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value, ...remaningValues) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.top = newNode;
      this.bottom = this.top;
    }

    if (this.length > 0) {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }

    if (remaningValues.length > 0) {
      remaningValues.forEach(value => {
        const newNode = new Node(value);
        const holdingPointer = this.top;
        this.top = newNode;
        this.top.next = holdingPointer;
        this.length++;
      });
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.top) return null;
    if (this.length === 1) this.bottom = null;

    const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;

    return holdingPointer.value;
  }

  isEmpty() {
    if (!this.length) return true;
    else return false;
  }
}

const myStack = new Stack();

class StackArr {
  constructor() {
    this.array = [];
  }

  peek() {
    return this.array[this.array.length - 1];
  }

  push(value, ...otherValues) {
    this.array.push(value);
    if (otherValues.length > 0) {
      otherValues.forEach(value => {
        this.array.push(value);
      });
    }

    return this;
  }

  pop() {
    return this.array.pop();
  }

  isEmpty() {
    if (!this.array.length) return true;
    else return false;
  }
}

const myStackArr = new StackArr();

///////////////////////////////////
///////////////////////////////////
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  printList() {
    const arr = [];
    let currentNode = this.first;

    while (currentNode) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return arr;
  }

  enqueue(value, ...otherValues) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    }

    if (this.length > 0) {
      this.last.next = newNode;
      this.last = newNode;
    }

    if (otherValues.length > 0) {
      otherValues.forEach(value => {
        const newNode = new Node(value);
        this.last.next = newNode;
        this.last = newNode;
        this.length++;
      });
    }

    this.length++;
    return this;
  }

  dequeue() {
    if (!this.length) return null;

    // if (this.first === this.last) {
    if (this.length === 1) {
      this.last = null;
    }

    const holdingPointer = this.first;
    const nextHoldingPointer = holdingPointer.next;
    this.first = nextHoldingPointer;

    this.length--;
    return holdingPointer.value;
  }

  isEmpty() {
    if (!this.length) return true;
    else return false;
  }
}

const myQueue = new Queue();

///////////////////////////////////
///////////////////////////////////
// IMPLEMENTING QUEUES USING THE STACKS
class QueueFromStack {
  constructor() {
    this.first = [];
    this.last = [];
  }

  enqueue(value) {
    while (this.first.length) this.last.push(this.first.pop());

    this.last.push(value);
    return this;
  }

  dequeue() {
    while (this.last.length) this.first.push(this.last.pop());
    return this.first.pop();
  }

  peek() {
    if (this.last.length > 0) return this.last[0];
    return this.first[this.first.length - 1];
  }
}

const myQueueFromStack = new QueueFromStack();
