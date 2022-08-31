var strStr = function (haystack, needle) {
  // This seems to be a bit of a multiple pointers but also a sliding window problem?
  let returnIdx = -1;
  // 1.loop through the haystack as long as i < haystack.length

  for (let i = 0; i + needle.length - 1 < haystack.length; i++) {
    // 2. if the first letter of the needle is found set found to true
    if (haystack.slice(i, i + needle.length) === needle) {
      return (returnIdx = i);
    }
  }
  return returnIdx;
};

console.log(strStr('hello', 'll')); // 2
console.log(strStr('ahaa', 'ha')); // 0
console.log(strStr('heloll', 'll')); // 4

// console.log()

// !! old attempt
// if (haystack[i] === needle[0]) {
// let tempIdx = i;
// found = true;

// we don't need to loop the whole needle.length because we know it
// k++;

// if (needle.length === 1) {
//   returnIdx = i;
//   return returnIdx;
// } else {
//   for (let j = i + 1; j < needle.length; ) {
//     // This ones fucky cause we need to loop through the haystack as modified by i not the needle from the beginning
//     if (haystack[j] === needle[k]) {
//       j++;
//       k++;
//       returnIdx = tempIdx;
//     } else {
//       k = 0;
//       found = false;
//       return returnIdx;
//     }
//   }
// }
// }
