const mergeTwoSortedArrays = (arr1, arr2) => {
  let returnArr = [];

  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      returnArr.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j]) {
      returnArr.push(arr2[j]);
      j++;
    }
    if (i === arr1.length) {
      returnArr.push(arr2.slice(j, arr2.length));
    } else if (j === arr2.length) {
      returnArr.push(arr1.slice(i, arr1.length));
    }
  }

  return returnArr.flat();
};

// Below is the answer from the course
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

// Below is the answer from someone in the course, seems to be a little neater
// Though kind of piratey 'ansARR'

function mergeKarim(arr1, arr2) {
  // !! I did not actually know you could comma declare variables lke this
  let i = 0,
    j = 0;
  let ansArr = [];

  while (i < arr1.length || j < arr2.length) {
    // For the remainder check, will this basically default to using the first condition to push the rest?
    if (arr1[i] <= arr2[j] || j >= arr2.length) {
      ansArr.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j] || i >= arr1.length) {
      ansArr.push(arr2[j]);
      j++;
    }
  }
  return ansArr;
}

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  //   !! Remember this Math.floor() Feels like I overlook that for halving
  const mid = Math.floor(arr.length / 2);
  // For slice you actually don't need to declare the end of the array if it's not just the standard last element
  let leftArr = mergeSort(arr.slice(0, mid)),
    rightArr = mergeSort(arr.slice(mid));
  return merge(leftArr, rightArr);
};

// console.log(mergeTwoSortedArrays([1, 10, 50, 199], [2, 14, 99, 200]));
console.log(mergeSort([1, 100, 900, 210, 4, 14, 6, 8, 9]));
