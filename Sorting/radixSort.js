// Known as an integer sort as opposed to a comparison sort

const getDigitByStr = (num, pos) => {
  return Math.abs(Number(num.toString().split('').reverse()[pos - 1]));
};

const getDigitViaPow = (num, pos) => {
  // 1. Surround with a floor rounding so no decimal points
  // 2. Do a math.abs so that we can deal with negative numbers
  // 3. this is kind of like finding which 100 multiple fits in each digit

  return Math.floor(Math.abs(num) / Math.pow(10, pos)) % 10;
};

const digitCountStr = (num) => {
  return num.toString().split('').length;
};

// A logarithm is kind of like asking
//  "how many of this number need to be multiplied together to get this number"

const digitCountMath = (num) => {
  if (num === 0) return 1;
  //   Math.log10 asks "10 to what power gives us this number?"
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const getMostDigits = (arr) => {
  let max = 0;
  //   Quick reminder, math.max just returns the max of any set of numbers
  // passed as arguments, so this will just reset the max var based on the loop
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, digitCountStr(arr[i]));
  }
  return max;
};

const radixSort = (nums) => {
  // 1. Find out how many digits the largest number has
  let mostDigits = getMostDigits(nums);
  //   2. Loop up until the largest amount of digits
  for (let k = 0; k < mostDigits; k++) {
    // 3. Create the buckets array of 10 empty arrays
    let buckets = Array(10).fill([], 0, 10);
    // OR
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
};
