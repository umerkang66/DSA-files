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
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          //Left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          //Right
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
    if (!this.root) return false;
    let currentNode = this.root;

    while (currentNode) {
      if (value < currentNode.value) currentNode = currentNode.left;
      else if (value > currentNode.value) currentNode = currentNode.right;
      else if (currentNode.value === value) return currentNode;
    }

    return null;
  }

  remove(value) {
    if (!this.root) {
      return false;
    }

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

  // This function will be called in DFSInorder
  traverseInorder(node, list) {
    if (node.left) this.traverseInorder(node.left, list);
    list.push(node.value);

    if (node.right) this.traverseInorder(node.right, list);

    return list;
  }

  DFSInorder() {
    return this.traverseInorder(this.root, []);
  }

  // This function will be called in DFSPostorder
  traversePostorder(node, list) {
    if (node.left) this.traversePostorder(node.left, list);

    if (node.right) this.traversePostorder(node.right, list);

    list.push(node.value);
    return list;
  }

  DFSPostorder() {
    return this.traversePostorder(this.root, []);
  }

  // This function will be called in DFSPreorder
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
const treeElements = [9, 4, 6, 20, 170, 15, 1];
treeElements.forEach(treeEl => tree.insert(treeEl));
traverse(tree.root);
tree.breathFirstSearchIterative();
tree.breathFirstSearchRecursive([tree.root], []);
tree.DFSInorder();
tree.DFSPreorder();
tree.DFSPostorder();

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
