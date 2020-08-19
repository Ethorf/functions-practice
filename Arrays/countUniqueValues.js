//count the number of unique (repeated is okay, just don't double the count) values in a sorted array
//Solution ideally will use 2 pointers, one at 0, one at 1, and compare if they are equal
let arr1 = [1, 1, 1, 1, 2]; //2
let arr2 = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]; // 7
const countUniqueValues1 = (arr) => {
	let count = 0;
	if (arr.length) {
		count = 1;
	}
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] !== arr[i + 1]) {
			count++;
		}
	}
	return count;
};
//I don't like his gumby solution, and I think mine is just as efficient
const countUniqueValues2 = (arr) => {
	if (!arr.length) return 0;
	var i = 0;
	for (var j = 1; j < arr.length; j++) {
		if (arr[i] !== arr[j]) {
			i++;
			//He is storing the unique values at the beginning and then just counting the index of where I is
			arr[i] = arr[j];
		}
	}
	return i + 1;
};

console.log(countUniqueValues2([]));
