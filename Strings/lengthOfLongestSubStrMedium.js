'use strict';

const str = 'abccabb';

// CODING OUR BRUTE FORCE SOLUTION WITH (n^2) TIME COMPLEXITY, AND O(n) SPACE COMPLEXITY
const lengthOfLongestSubStrBruteForce = function (str) {
  if (str.length <= 0) return str.length;
  let longest = 0;

  for (let i = 0; i < str.length; i++) {
    let seenChar = {};
    let curLength = 0;

    for (let j = i; j < str.length; j++) {
      const curChar = str[j];
      if (!seenChar[curChar]) {
        curLength++;
        seenChar[curChar] = true;
        longest = Math.max(longest, curLength);
      } else break;
    }
  }

  return longest;
};

lengthOfLongestSubStrBruteForce(str);

// CODING OUT OPTIMAL SOLUTION WITH O(n) TIME COMPLEXITY, AND O(n) SPACE COMPLEXITY
const lengthOfLongestSubStr = str => {
  if (str.length <= 0) return str.length;

  const strObj = {};
  let maxLength = 0;
  let start = -1;

  for (let i = 0; i < str.length; i++) {
    const curChar = str[i];
    if (strObj[curChar] > start) start = strObj[curChar];
    strObj[curChar] = i;

    maxLength = Math.max(maxLength, i - start);
  }

  return maxLength;
};

lengthOfLongestSubStr(str);
