'use strict';

//////////////////////////////////////
//////////////////////////////////////
// BUBBLE SORT
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const bubbleSort = array => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
};

bubbleSort(numbers);

//////////////////////////////////////
//////////////////////////////////////
// SELECTION SORT
const numsArr = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const selectionSort = rawArr => {
  const numsArr = [...rawArr];
  const n = numsArr.length;
  for (let i = 0; i < n; i++) {
    // Finding the smallest number in the subarray
    let min = i;
    for (let j = i + 1; j < n; j++) if (numsArr[j] < numsArr[min]) min = j;

    if (min !== i) {
      // Swapping the elements
      const temp = numsArr[i];
      numsArr[i] = numsArr[min];
      numsArr[min] = temp;
    }
  }

  return numsArr;
};

selectionSort(numsArr);

//////////////////////////////////////
//////////////////////////////////////
// INSERTION SORT
const insertionSort = array => {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    if (array[i] < array[0]) {
      //move number to the first position
      array.unshift(array.splice(i, 1)[0]);
    } else {
      // only sort number smaller than number on the left of it. This is the part of insertion sort that makes it fast if the array is almost sorted.
      if (array[i] < array[i - 1]) {
        //find where number should go
        for (let j = 1; j < i; j++) {
          if (array[i] >= array[j - 1] && array[i] < array[j]) {
            //move number to the right spot
            array.splice(j, 0, array.splice(i, 1)[0]);
          }
        }
      }
    }
  }

  return array;
};
insertionSort(numbers);

//////////////////////////////////////
//////////////////////////////////////
// MERGE SORT
const merge = (left, right) => {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

const mergeSort = array => {
  if (array.length === 1) {
    return array;
  }

  // Split Array in into right and left
  const length = array.length;
  const middle = Math.floor(length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  // console.log('left:', left);
  // console.log('right:', right);

  return merge(mergeSort(left), mergeSort(right));
};
mergeSort(numbers);

//////////////////////////////////////
//////////////////////////////////////
// MERGE SORT 2
const merge2 = (left, right) => {
  let arr = [];
  // Break out of loop if any one of the array gets empty
  while (left.length && right.length) {
    // Pick the smaller among the smallest element of left and right sub arrays
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }

  // Concatenating the leftover elements
  // (in case we didn't go through the entire left or right array)
  return [...arr, ...left, ...right];
};

const mergeSort2 = array => {
  // Base case or terminating case
  if (array.length < 2) return array;

  const half = array.length / 2;
  const left = array.splice(0, half);
  return merge(mergeSort(left), mergeSort(array));
};

mergeSort2(numbers);

//////////////////////////////////////
//////////////////////////////////////
// QUICK SORT
const quickSort = (array, left, right) => {
  let pivot;
  let partitionIndex;

  if (left < right) {
    pivot = right;
    partitionIndex = partition(array, pivot, left, right);

    //sort left and right
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }

  return array;
};

const partition = (array, pivot, left, right) => {
  let pivotValue = array[pivot];
  let partitionIndex = left;

  for (let i = left; i < right; i++) {
    if (array[i] < pivotValue) {
      swap(array, i, partitionIndex);
      partitionIndex++;
    }
  }

  swap(array, right, partitionIndex);
  return partitionIndex;
};

const swap = (array, firstIndex, secondIndex) => {
  const temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
};

//Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1);

//////////////////////////////////////
//////////////////////////////////////
// QUICK SORT: V2
const quickSort2 = (arr, left, right) => {
  if (left < right) {
    const pi = partition2(arr, left, right);
    quickSort2(arr, left, pi - 1);
    quickSort2(arr, pi + 1, right);
  }
};

const partition2 = (arr, left, right) => {
  const pivot = arr[right];
  let i = left - 1;

  for (let j = left; j <= right; j++) {
    if (arr[j] < pivot) {
      i++;
      swap2(arr, i, j);
    }
  }

  swap2(arr, i + 1, right);
  return i + 1;
};

const swap2 = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

quickSort2(numbers, 0, numbers.length - 1);
