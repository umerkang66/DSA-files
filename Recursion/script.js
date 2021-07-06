'use strict';

// let counter = 0;

// const inception = () => {
//   if (counter > 3) {
//     return 'DONE!';
//   }
//   counter++;
//   return inception();
// };

// console.log(inception());

// 1) Identify the base case
// 2) Identify the recursive case
// 3) Get closer and closer and return when needed. Usually there are always 2 returns

/*
const findFactorialIterative = function (num) {
  let answer = 1;
  for (let i = 2; i <= num; i++) {
    answer *= i;
  }
  return answer;
};
console.log(findFactorialIterative(5));

const factRecursive = function (num) {
  if (!num || num <= 2) return num;
  return num * factRecursive(num - 1);
};
console.log(factRecursive(4));

const addAllNumsRecursive = num => {
  if (num === 0) return num;
  return num + addAllNumsRecursive(num - 1);
};
console.log(addAllNumsRecursive(4));

// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n) {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }

  return arr[n];
}
console.log(fibonacciIterative(6));

function fibonacciRecursive(num) {
  if (num < 2) return num;
  return fibonacciRecursive(num - 2) + fibonacciRecursive(num - 1);
}
console.log(fibonacciRecursive(6));

// calculate n raise to power of p
const nRaiseToPower = (num, power) => {
  if (power === 0) return 1;
  return num * nRaiseToPower(num, power - 1);
};
console.log(nRaiseToPower(3, 4));

// with for loops
const nRaiseToPower2 = (num, power) => {
  let holdingNum = num;
  for (let i = 2; i <= power; i++) {
    num *= holdingNum;
  }
  return num;
};
console.log(nRaiseToPower2(3, 4));

const factorialRecursive = num => {
  if (num < 2) return num;
  return num * factorialRecursive(num - 1);
};
console.log(factorialRecursive(5));

const factorialRecursive2 = num => {
  let factorial = 1;
  for (let i = 2; i <= num; i++) {
    factorial *= i;
  }

  return factorial;
};
console.log(factorialRecursive2(5));

const fibonacciRecursive = num => {
  if (num < 2) return num;
  return fibonacciRecursive(num - 2) + fibonacciRecursive(num - 1);
};
console.log(fibonacciRecursive(4));

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
    if (!this.root) {
      return false;
    }
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
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.remove(170);
console.log(traverse(tree.root));
console.log(traverse2(tree.root));

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

function traverse2(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse2(node.left);
  tree.right = node.right === null ? null : traverse2(node.right);
  return tree;
}

//Implement a function that reverses a string using iteration...and then recursion!
function reverseStringIterative(str) {
  const strArr = str.split('');
  const reveseStrArr = [];

  for (let i = strArr.length - 1; i >= 0; i--) {
    reveseStrArr.push(strArr[i]);
  }

  return reveseStrArr.join('');
}

// const reverseStrArr = [];
const reverseStringRecursive = function (str) {
  // const strArr = str.split('');
  // reverseStrArr.push(strArr[strArr.length - 1]);

  // if (str.length === 1) return reverseStrArr.join('');
  // return reverseStringRecursive(str.substring(0, str.length - 1));

  if (str === '') return str;
  return reverseStringRecursive(str.substr(1)) + str.charAt(0);
};

console.log(reverseStringIterative('zero to mastery'));
console.log(reverseStringRecursive('zero to mastery'));
//should return: 'yretsam oyoy'
*/
