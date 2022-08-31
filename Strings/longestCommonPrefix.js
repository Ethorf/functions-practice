longestCommonPrefix = (arr) => {
  let prefix = [];
  //   Find shortest word?
  // Outer loop loops through letters in word
  //   Inner loop loops through words
  // Add character to array and if array is all equal, add that character to master array
  // return masterArr.join()
  // Short circuits?
  // ** Note, if you do find a short circuit, ask what would make it redundant
  // Hidden Rules?
  // ** also ask what would make this redundant
  // Could you also just work on the sorted array?

  let shortestLength = arr.sort((a, b) => a.length - b.length)[0].length;
  let loopBroken = false;

  // Letters loop
  for (let i = 0; i < shortestLength && !loopBroken; i++) {
    // Words Loop
    let letters = [];
    for (let j = 0; j < arr.length; j++) {
      letters.push(arr[j][i]);
    }
    if (letters.every((letter) => letter === letters[0])) {
      prefix.push(letters[0]);
    } else {
      loopBroken = true;
    }
  }
  return prefix.join('');
};
// Random notes
//  If you have two loops is there a way to use recursion??
const longestCommonPrefixInternetStranger1 = (strs) => {
  if (!strs.length) return '';
  // Populate prefix with first word in arr
  let prefix = strs[0];

  // Loop over arr starting at end and decrement
  for (let i = strs.length; --i; ) {
    // so this is looping over all the strings while the word at that index = prefix
    // and reducing the length of prefix until that happens
    for (; strs[i].indexOf(prefix) !== 0; ) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (!prefix.length) return '';
    }
  }

  return prefix;
};

var longestCommonPrefixRecurs = function (strs) {
  const emptyIndex = strs.findIndex((item) => item === '');
  if (strs.length === 0 || emptyIndex !== -1) {
    return '';
  }
  let commonFirstChar = '';
  for (i = 0; i < strs.length; i++) {
    const firstChar = strs[i].substring(0, 1);
    if (commonFirstChar === '') {
      commonFirstChar = firstChar;
    } else {
      if (firstChar !== commonFirstChar) {
        return '';
      }
    }
  }
  const newStrs = strs.map((item) => item.substring(1));
  return commonFirstChar + longestCommonPrefix(newStrs);
};

testArr1 = ['glower', 'flow', 'flighta'];

console.log(longestCommonPrefix(testArr1));
