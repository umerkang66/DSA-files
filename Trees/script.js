'use strict';

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if (typeof value !== 'number') return;
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          // Left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }

          currentNode = currentNode.left;
        } else {
          // Right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }

          currentNode = currentNode.right;
        }
      }
    }
  }

  lookup(value) {
    if (!this.root) return null;
    let currentNode = this.root;

    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return currentNode;
      }
    }

    return null;
  }

  remove(value) {
    if (!this.root) return false;

    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!

        //Option 1: No right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            //if parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

              //if parent < current value, make left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }

  breathFirstSearchIterative() {
    let currentNode = this.root;
    let list = [];
    let queue = [];
    queue.push(currentNode);

    while (queue.length > 0) {
      currentNode = queue.shift();
      list.push(currentNode.value);

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    return list;
  }

  breathFirstSearchRecursive(queue, list) {
    if (!queue.length) return list;
    let currentNode = queue.shift();
    list.push(currentNode.value);

    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);

    return this.breathFirstSearchIterative(queue, list);
  }

  // This function will be called in BFSInorder
  traverseInorder(node, list) {
    if (node.left) this.traverseInorder(node.left, list);
    list.push(node.value);

    if (node.right) this.traverseInorder(node.right, list);
    return list;
  }

  DFSInorder() {
    return this.traverseInorder(this.root, []);
  }

  // This function will be called in BFSPostorder
  traversePostorder(node, list) {
    if (node.left) this.traversePostorder(node.left, list);
    if (node.right) this.traversePostorder(node.right, list);

    list.push(node.value);
    return list;
  }

  DFSPostorder() {
    return this.traversePostorder(this.root, []);
  }

  // This function will be called in BFSPreorder
  traversePreorder(node, list) {
    list.push(node.value);
    if (node.left) this.traversePreorder(node.left, list);
    if (node.right) this.traversePreorder(node.right, list);

    return list;
  }

  DFSPreorder() {
    return this.traversePreorder(this.root, []);
  }
}

const tree = new BinarySearchTree();
function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
// console.tree(traverse(tree.root));

//////////////////////////////////////
//////////////////////////////////////

// User defined class
// to store element and its priority
class QElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

// PriorityQueue class
class PriorityQueue {
  // An array is used to implement priority
  constructor() {
    this.items = [];
  }

  // functions to be implemented

  // enqueue function to add element
  // to the queue as per priority
  enqueue(element, priority) {
    // creating object from queue element
    const qElement = new QElement(element, priority);
    let contain = false;

    // iterating through the entire
    // item array to add element at the
    // correct location of the Queue
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].priority > qElement.priority) {
        // Once the correct location is found it is
        // enqueued
        this.items.splice(i, 0, qElement);
        contain = true;
        break;
      }
    }

    // if the element have the highest priority
    // it is added at the end of the queue
    if (!contain) this.items.push(qElement);
  }

  // dequeue method to remove
  // element from the queue
  dequeue() {
    // return the dequeued element
    // and remove it.
    // if the queue is empty
    // returns Underflow
    if (this.isEmpty()) return 'Underflow';
    return this.items.shift();
  }

  // front function
  front() {
    // returns the highest priority element
    // in the Priority queue without removing it.
    if (this.isEmpty()) return 'No elements in Queue';
    return this.items[0];
  }

  // rear function
  rear() {
    // returns the lowest priority
    // element of the queue
    if (this.isEmpty()) return 'No elements in Queue';
    return this.items[this.items.length - 1];
  }

  // isEmpty function
  isEmpty() {
    // return true if the queue is empty.
    return this.items.length === 0;
  }

  // printQueue function
  // prints all the element of the queue
  printPQueue() {
    let str = '';
    for (let i = 0; i < this.items.length; i++)
      str += this.items[i].element + ' ';
    return str;
  }
}

// // creating object for queue classs
const priorityQueue = new PriorityQueue();
