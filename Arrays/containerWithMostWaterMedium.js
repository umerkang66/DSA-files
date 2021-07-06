'use strict';

const arr = [4, 8, 1, 10, 3, 9];
// Brute force solution O(n^2)
const containerWithMostWaterBruteForce = function (arr, returnArr = false) {
  if (arr.length <= 2) return 0;
  let maxArea = 0;
  let resultArr = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const height = Math.min(arr[i], arr[j]);
      const width = j - i;
      const area = width * height;
      // maxArea = Math.max(maxArea, area);

      if (area > maxArea) {
        maxArea = area;
        resultArr = [arr[i], arr[j]];
      }
    }
  }

  if (returnArr) return resultArr;
  return maxArea;
};
containerWithMostWaterBruteForce(arr);

// O(n) solution using a technique SHIFTING POINTERS
const containerWithMostWater = function (arr) {
  let pointer1 = 0;
  let pointer2 = arr.length - 1;
  let maxArea = 0;

  while (pointer1 < pointer2) {
    const height = Math.min(arr[pointer1], arr[pointer2]);
    const width = pointer2 - pointer1;
    const area = height * width;
    maxArea = Math.max(maxArea, area);

    if (arr[pointer1] <= arr[pointer2]) pointer1++;
    else pointer2--;
  }

  return maxArea;
};
containerWithMostWater(arr);
