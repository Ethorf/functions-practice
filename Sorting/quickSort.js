const basicSwap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const pivotHelper = (arr, startIdx = 0, endIdx = arr.length + 1) => {
  // ** Pre-pseudo code
  // Can also be called "partition"
  // should designate a pivot element, we'll use the 1st element in this example but there are consequences
  // should rearrange elements so that elements less than the pivot are on the left, elements greater are on the right
  // the order of elements on either side of the pivot does not matter
  // this should not be immutable on the array but instead modify the area "in place"
  // return the pivot's index after sorting
  // ** Pseudo-code
  //   Grab pivot from start of arr
  // store current pivot idx in a var (likely return this too)
  // Loop through the arr from the start
  // if pivot is > than current element (i), increment the pivot idx and swap current element and pivot
  // swap the starting element and the pivot
  // return the pivot index

  let pivot = arr[startIdx];
  let swapIdx = startIdx;

  for (let i = startIdx + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      basicSwap(arr, swapIdx, i);
    }
  }
  basicSwap(arr, startIdx, swapIdx);
  return swapIdx;
};

console.log(pivotHelper([4, 8, 2, 1, 5, 7, 6, 3]));

function pivotHelperCourseSolution(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}

//   from the Course
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right); //3
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]);
