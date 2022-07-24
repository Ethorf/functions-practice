const selectionSort = (arr) => {
  let min = arr[0];
  //   Think of j as the first variable so we want it to be the smallest
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;

    const swap = (idx1, idx2, arr) => ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

    for (let j = i + 1; j < arr.length; j++) {
      console.log('arr[i],arr[i] is:');
      console.log(arr[i], arr[j]);

      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
      // GOTTA HAVE THE SWAP INSIDE THE INNER LOOP THAT"S WHAT FUCKED ME
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
};

console.log(selectionSort([2, 4, 5, 3, 1]));
