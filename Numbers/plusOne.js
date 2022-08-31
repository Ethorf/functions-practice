var plusOne = function (digits) {
  if (digits[0] === 9 && digits.length === 1) {
    digits[0] = 0;
    digits.unshift(1);
  } else if (digits[digits.length - 1] === 9 && digits[digits.length - 2] !== 9) {
    digits[digits.length - 1] = 0;
    digits[digits.length - 2]++;
  } else if (digits[digits.length - 1] === 9 && digits[digits.length - 2] === 9) {
    let nineCount = 0;
    for (let i = digits.length - 1; i > -1 && digits[i] === 9; i--) {
      nineCount++;
      digits[i] = 0;
    }

    if (nineCount === digits.length) {
      digits.unshift(1);
      return digits;
    } else {
      digits[digits.length - nineCount - 1] = digits[digits.length - nineCount - 1] + 1;
      return digits;
    }
  } else {
    digits[digits.length - 1]++;
  }
  return digits;
};

// ** Lessons learned:
// If you are going to loop all the way anyways see if you can refactor to have the loop happen initially add conditions
// remember that returning is also a condition
// Look for implicit conditions to reduce complexity

let plusOneIS1 = function (digits) {
  // Start a decrementing loop, this will only go beyond the final step if
  for (let i = digits.length - 1; i >= 0; i--) {
    // Increment the last digit no matter what
    digits[i]++;
    console.log('digits[i] is:');
    console.log(digits[i]);

    if (digits[i] > 9) {
      digits[i] = 0;
    } else {
      // So this will break the loop essentially
      return digits;
    }
  }
  //   digits.unshift(1);
  //   return digits;
};

var plusOneIS2 = function (digits) {
  for (var i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      //   OH so you cannn use break and just return at the end good to know
      break;
      // This below has an implicit === 9 within it since it can't be less than 9
    } else if (i === 0) {
      digits[0] = 0;
      digits = [1].concat(digits);
      break;
    } else {
      // This will take care of all 9's that are not the first element and the 1 addition will be in the upper block
      digits[i] = 0;
    }
  }
  return digits;
};
// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]

// Input: [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
// [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]
// in: [9,9]
// out: [1,0,0]

console.log(plusOneIS1([4, 3, 9]));
