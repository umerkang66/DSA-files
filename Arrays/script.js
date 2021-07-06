'use strict';

//////////////////////////////////////
//////////////////////////////////////
// DSA ARRAYS
/*
const strings = ['a', 'b', 'c', 'd'];
console.log(strings[3]); // O(1)
strings.splice(2, 1); // O(n)
strings.pop(); // O(1)
strings.push(); // O(1)
strings.unshift(); // O(n)
console.log(strings);

// arrays can be static array or dynamic array
strings.push('e');
console.log(strings);

//////////////////////////////////////
//////////////////////////////////////
// CREATING AN ARRAY
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const deletedItem = this.data[index];
    this.shiftItems(index);
    return deletedItem;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArr = new MyArray();

newArr.push('Hi');
newArr.push('you');
newArr.push('are');
newArr.push('not');
newArr.push('very');
newArr.push('nice');
newArr.delete(3);

console.log(newArr);
*/

//////////////////////////////////////
//////////////////////////////////////
// SOME COMMON QUESTIONS
/*
const str = 'Hi my name is umer';

const reverseStr = function (str) {
  if (!str || str.length < 2 || typeof str !== 'string') return;

  const string = str.toLowerCase();
  const reversedStrArr = [];

  for (let i = string.length - 1; i >= 0; i--) {
    reversedStrArr.push(string[i]);
  }

  // prettier-ignore
  const reversedStrUpperCased = reversedStrArr.join('').split(' ').map(arrEl => arrEl[0].toUpperCase() + arrEl.slice(1)).join(' ');

  return reversedStrUpperCased;
};

console.log(reverseStr(str));

// ONE LINER SOLUTION
const reverseStr2 = str => [...str].reverse().join('');

console.log(reverseStr2(str));

// MERGE SORTED ARRAYS
const arr1 = [0, 3, 4, 31];
const arr2 = [4, 6, 30];

// one liner solution
// const mergeSortedArr2 = (arr1, arr2) => [...arr1, ...arr2].sort((a, b) => a - b);
const mergeSortedArr = function (arr1, arr2) {
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];

  const mergedArr = [];

  let i = 1;
  let j = 1;

  while (arr1Item || arr2Item) {
    if (!arr2Item || arr1Item < arr2Item) {
      mergedArr.push(arr1Item);
      arr1Item = arr1[i];
      i++;
    } else {
      mergedArr.push(arr2Item);
      arr2Item = arr2[j];
      j++;
    }
  }

  return mergedArr;
};

console.log(mergeSortedArr(arr1, arr2));

// TWO SUMS
const numsArr1 = [2, 7, 11, 15];
const target1 = 9;

const twoSum = function (numsArr, target) {
  const twoSumIndecies = [];

  numsArr.forEach((_, i) => {
    if (numsArr[i] + numsArr[i + 1] === target) {
      twoSumIndecies.push(i, i + 1);
    }
  });

  return twoSumIndecies;
};

console.log(twoSum(numsArr1, target1));

const movements = [240, 120, 80, 520, 720, 120, 230, 1140];
// return < 0 (A, B) // 1) Ascending
// return > 0 (B, A) // 2) Descending
[...movements].sort((a, b) => a - b);
[...movements].sort((a, b) => b - a);

// REVERSE THE NUMBERS
const num = -1234567;

const reverseNum = function (num) {
  const numArr = num.toString().split('');
  const reversedArr = [];

  const reverseTheArr = function () {
    for (let i = numArr.length - 1; i >= 0; i--) {
      if (numArr[i] === '-' && i === 0) {
        reversedArr.unshift('-');
        return;
      }
      reversedArr.push(numArr[i]);
    }
  };
  reverseTheArr();

  const reversedNum = +reversedArr.join('');
  return reversedNum;
};

console.log(reverseNum(num));

// RETURN TRUE IF ARRAY ELEMENT DUPLICATES
const numsArr = [1, 2, 3, 4];

const duplicateArrEl = function (numsArr) {
  let duplicateArrElBool;

  for (let i = 0; i < numsArr.length; i++) {
    for (let j = i + 1; j < numsArr.length; j++) {
      if (numsArr[i] === numsArr[j]) duplicateArrElBool = true;
    }
  }

  if (duplicateArrElBool === undefined) duplicateArrElBool = false;
  return duplicateArrElBool;
};

console.log(duplicateArrEl(numsArr));

// SUBARRAYS 
const numsArr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const subArr = function (numsArr) {
  let maxSub = numsArr[0];
  let curSum = 0;

  for (let i = 0; i < numsArr.length; i++) {
    if (curSum < 0) curSum = 0;
    curSum += numsArr[i];
    maxSub = Math.max(maxSub, curSum);
  }

  return maxSub;
};

console.log(subArr(numsArr));

const numsArr = [3, 5, -4, 8, 11, 1, -1, 6];
const target = 8;

const twoSum = function (numsArr, target) {
  const sumObj = {};
  let secondNum;

  for (let i = 0; i < numsArr.length; i++) {
    if (sumObj[target - numsArr[i]]) secondNum = numsArr[i];
    else sumObj[numsArr[i]] = true;
  }

  let firstNum = target - secondNum;
  return [firstNum, secondNum];
};

console.log(twoSum(numsArr, target));
*/
