const palindromeNumber = (num) => {
  const stringNum = num.toString();

  return stringNum.split('').reverse().join('') === stringNum.split('').join('');
};

// Below was a solution from leetcode

var isPalindrome = function (num) {
  //Short circuit saying basically
  //   negative numbers are not palindromes
  // numbers that are multiples of 10's are not palindromes
  if (num < 0 || (num !== 0 && num % 10 == 0)) return false;

  let reverse = 0;

  // NOTE this below basically means that while num has more digits than reverse cause that's what we're adding
  while (num > reverse) {
    console.log('reverse is:');
    console.log(reverse);
    // NOTE modulo 10 gives you the last digit of the numbe
    // this is essentially saying add the last digit of num to reverse
    reverse = reverse * 10 + (num % 10);
    // NOTE double tilde to remove all things after decimal point
    // NOTE 2 / 10 shaves the last digit off of a number, tildes remove the decimal points
    num = ~~(num / 10);
    console.log('num is:');
    console.log(num);
  }

  return num === reverse || num === ~~(reverse / 10);
};

console.log(isPalindrome(3223));
