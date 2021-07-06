'use strict';

const user = {
  name: 'umer',
  age: 21,
  magic: true,

  hello() {
    console.log('helloooo');
  },
};

console.log(user.age); // O(1)
user.spell = 'Abraca Dabra'; // O(1)
console.log(user.spell); // O(1)
user.hello();

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }

    return hash;
  }

  set(key, value) {
    const address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }

    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    const address = this._hash(key);
    const currentBucket = this.data[address];
    if (!currentBucket.length) return;

    for (let i = 0; i < currentBucket.length; i++) {
      if (currentBucket[i][0] === key) {
        return currentBucket[i][1];
      }
    }
  }

  keys() {
    const keysArr = [];

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArr.push(this.data[i][0][0]);
      }
    }

    return keysArr;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 5000);
console.log(myHashTable.get('grapes'));
console.log(myHashTable.keys());

const numsArr = [1, 6, 34, 34, 23, 4, 6, 0, 7, 8];

// using nested loops
const firstRecurringChar = function (numsArr) {
  for (let i = 0; i < numsArr.length; i++) {
    for (let j = i + 1; j < numsArr.length; j++) {
      if (numsArr[i] === numsArr[j]) {
        return numsArr[i];
      }
    }
  }
  return undefined;
};
console.log(firstRecurringChar(numsArr));

// using hash tables
const firstRecurringChar2 = function (numsArr) {
  const map = {};
  for (let i = 0; i < numsArr.length; i++) {
    if (map[numsArr[i]]) return numsArr[i];
    else map[numsArr[i]] = true;
  }

  return undefined;
};
console.log(firstRecurringChar2(numsArr));
