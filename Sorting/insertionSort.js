const swap = (idx1, idx2, arr) => ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

const insertionSort = (arr) => {
  // Basic loop 1
  for (let i = 1; i < arr.length; i++) {
    // Curr value functions as the removal placeholder before the insertion

    let currVal = arr[i];

    // This is the backwards loop
    // J loop is generally going to be checking the left side val
    for (var j = i - 1; j >= 0 && arr[j] > currVal; j--) {
      // This is kind of a confusing way of doing an if statement but it's working inside the  for loop declaration
      // While loop may actually be more readable?
      // Basically you are "swapping ish" every J loop
      arr[j + 1] = arr[j];
    }

    arr[j + 1] = currVal;
  }
  return arr;
};

const insertionSortOldAttempt = (arr) => {
  console.log('starting arr is');
  console.log(arr);
  for (let i = 1; i < arr.length; i++) {
    // why do we need this instead of arr[i]?

    let currVal = arr[i];

    for (let j = i - 1; j >= 0 && arr[j] > currVal; j--) {
      console.log('arr[i], arr[j] is:');
      console.log(arr[i], arr[j]);

      if (arr[i] < arr[j]) {
        console.log('lessness found');
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
        console.log('changed arr is');
        console.log(arr);
      }
    }
  }
  return arr;
};

console.log(insertionSort([2, 1, 76, 9, 4]));
