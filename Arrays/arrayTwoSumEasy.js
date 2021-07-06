'use strict';

const numsArr = [1, 3, 7, 9, 2];
const target = 11;
const numsArr2 = [3, 3];
const target2 = 6;

// brute force solution
const twoSumBruteForce = (numsArr, target) => {
  const len = numsArr.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (numsArr[i] + numsArr[j] === target) return [i, j];
    }
  }

  return null;
};
twoSumBruteForce(numsArr, target);
twoSumBruteForce(numsArr2, target2);

// SOLVED IT WITH LINEAR TIME COMPLEXITY O(n)
// EXPLANATION: At first it is going to loop over the array and check if the 9 exist and it does not and it will the index of 9 in the else block in the sumObj hashMap when it is going to enter the next index that is 2 element in array, the index becomes 4, and target - 2 becomes 9 and 9 already exist so if block turns to be true and returns the index of the stored value 9 in sumObj that is 3, and current index that is the next value 2 and its index is 4, AND DONT FORGET WE HAVE TO CHECK IN THE FIRST IF BLOCK IF THE INDEX THAT WE ARE STORING IN THE SUMOBJ IS EQUAL TO ZERO OR MORE THAN ZERO BECAUSE ZERO IS A FALSY VALUE
const twoSum = (numsArr, target) => {
  if (numsArr.length <= 1) return null;
  const sumObj = {};

  for (let i = 0; i < numsArr.length; i++) {
    if (sumObj[target - numsArr[i]] >= 0)
      return [sumObj[target - numsArr[i]], i];
    else sumObj[numsArr[i]] = i;
  }

  return null;
};
twoSum(numsArr, target);
twoSum(numsArr2, target2);
