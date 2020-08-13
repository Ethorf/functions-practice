//given an unsorted list of consecutive integers, determine the amount of swaps necessary to sort the array
let arr1 = [7, 1, 3, 2, 4, 5, 6];

const minimumSwaps = (arr) => {
	let sorted = arr.slice().sort((a, b) => a - b);
	let ogArr = arr.slice().sort((a, b) => a - b);

	let swapCount = 0;
	// for (let i = 0; i < arr.length; i++) {
	// 	if (arr[i] > arr[i + 1]) {
	// 		arr[i] = arr[i + 1];
	// 		arr[i + 1] = ogArr[i];
	// 		swapCount++;
	// 	}
	// }
	arr.sort(function compare(a, b) {
		if (a < b) {
			return -1;
		}
		if (a > b) {
			swapCount++;
			return 1;
		}
		return 0;
	});
	return swapCount;
};

console.log(minimumSwaps(arr1));

//hmm maybe swaps is a little different than sorting, as two numbers need to change places, not neccessarily be replaced by something else
