'use strict';

const str1 = 'abc#d';
const str2 = 'abzz##d';

// CODING OUR BRUTE FORCE SOLUTION
const strBackspacedBruteForce = str => {
  const strArr = str.split('');
  let strArrBackspaced = [];
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] !== '#') strArrBackspaced.push(strArr[i]);
    else strArrBackspaced.pop();
  }

  return strArrBackspaced.join('');
};

const isTypedOutStringsEqualBruteForce = function (str1, str2) {
  const str1Backspaced = strBackspacedBruteForce(str1);
  const str2Backspaced = strBackspacedBruteForce(str2);

  if (str1Backspaced === str2Backspaced) return true;
  else return false;
};

isTypedOutStringsEqualBruteForce(str1, str2);

// CODING OUR OPTIMIZE SOLUTION: THERE IS NO NEED TO OPTIMIZE THE TIME COMPLEXITY BECAUSE IT IS ALREADY O(n), BUT WE NEED TO OPTIMIZE THE SPACE COMPLEXITY, BY REMOVING THE USE OF ARRAY BECAUSE WE ARE NOT RETURNING ARRAY, WE ARE SIMPLY JUST RETURNING TRUE, OR FALSE
const isTypedOutStrings = (str1, str2) => {
  let pointer1 = str1.length - 1;
  let pointer2 = str2.length - 1;

  while (pointer1 >= 0 || pointer2 >= 0) {
    if (str1[pointer1] === '#' || str2[pointer2] === '#') {
      if (str1[pointer1] === '#') {
        let backcount = 2;

        while (backcount > 0) {
          pointer1--;
          backcount--;

          if (str1[pointer1] === '#') backcount += 2;
        }
      }

      if (str2[pointer2] === '#') {
        let backcount = 2;

        while (backcount > 0) {
          pointer2--;
          backcount--;

          if (str2[pointer2] === '#') backcount += 2;
        }
      }
    } else {
      if (str1[pointer1] !== str2[pointer2]) return false;
      else {
        pointer1--;
        pointer2--;
      }
    }
  }

  return true;
};

isTypedOutStrings(str1, str2);
