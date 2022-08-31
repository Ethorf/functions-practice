const romanToInt = (str) => {
  let symbolArr = str.toUpperCase().split('');
  let numArr = [];

  let romanObj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const subArr1 = ['V', 'X'];
  const subArr2 = ['L', 'C'];
  const subArr3 = ['D', 'M'];

  for (let i = 0; i < symbolArr.length; i++) {
    if (subArr1.includes(symbolArr[i]) && symbolArr[i - 1] === 'I') {
      numArr.push(romanObj[symbolArr[i]] - romanObj['I'] * 2);
    } else if (subArr2.includes(symbolArr[i]) && symbolArr[i - 1] === 'X') {
      numArr.push(romanObj[symbolArr[i]] - romanObj['X'] * 2);
    } else if (subArr3.includes(symbolArr[i]) && symbolArr[i - 1] === 'C') {
      numArr.push(romanObj[symbolArr[i]] - romanObj['C'] * 2);
    } else {
      numArr.push(romanObj[symbolArr[i]]);
    }
  }
  //   return numArr;
  return numArr.reduce((a, b) => a + b);
};

// DCXXI should return 621 but is returning 401
// "MCMXCIV" should return 1994 but is returning 2194

// Partial internet solution
const romanToIntInternet = (s) => {
  const legend = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;

  //   You can do this because no matter what if a subtraction is happening the following digit will be greater
  // also NOTE you can index strings just like arrays
  //   IDEA always try to look for a hidden check like this, as in the subtracting number will always be less than the number it's after, otherwise it's more
  for (let i = 0; i < s.length; i++) {
    if (legend[s[i]] < legend[s[i + 1]]) {
      total += legend[s[i + 1]] - legend[s[i]];
      i++;
    } else {
      total += legend[s[i]];
    }
  }

  return total;
};

console.log(romanToIntInternet('MCMXCIV'));
