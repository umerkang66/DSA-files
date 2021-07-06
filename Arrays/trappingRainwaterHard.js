'use strict';

// curWater = min(max1, max2) - currentHeight
const arr = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2];

// BRUTE FORCE SOLUTION
const trappingRainWaterBruteForce = function (heights) {
  const length = heights.length;
  let total = 0;

  for (let i = 0; i < length; i++) {
    let pointerL = i;
    let pointerR = i;
    let maxL = 0;
    let maxR = 0;

    while (pointerR < length) {
      maxR = Math.max(heights[pointerR], maxR);
      pointerR++;
    }

    while (pointerL >= 0) {
      maxL = Math.max(heights[pointerL], maxL);
      pointerL--;
    }

    const currentHeight = Math.min(maxL, maxR) - heights[i];
    if (currentHeight >= 0) total += currentHeight;
  }

  return total;
};

trappingRainWaterBruteForce(arr);

// SOLUTION WITH O(N) LINEAR TIME COMPLEXITY USING TWO POINTERS TECHNIQUE
const trappingRainWater = function (arr) {
  let pointerL = 0;
  let pointerR = arr.length - 1;
  let maxL = 0;
  let maxR = 0;
  let total = 0;

  while (pointerL < pointerR) {
    if (arr[pointerL] <= arr[pointerR]) {
      if (arr[pointerL] >= maxL) maxL = arr[pointerL];
      else total += maxL - arr[pointerL];

      pointerL++;
    } else {
      if (arr[pointerR] >= maxR) maxR = arr[pointerR];
      else total += maxR - arr[pointerR];

      pointerR--;
    }
  }

  return total;
};

trappingRainWater(arr);
