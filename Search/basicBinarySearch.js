//function takes sorted array and a value
//creates a left pointer at the start, right pointer at the end of the array
//loop while the left pointer is still less than right pointer

let arr1 = [1, 2, 3, 4, 5]; //target 2 //result 1
let arr2 = [1, 2, 3, 4, 5]; //target 5 //result 4
let arr3 = [5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 96, 99]; //target 10 //result 2

const basicBinarySearch = (arr, target) => {
	let rightPointer = arr.length - 1;
	let leftPointer = 0;
	let middlePointer = Math.round(arr.length / 2);

	while (leftPointer < rightPointer) {
		if (arr[leftPointer] === target) {
			return leftPointer;
		} else if (arr[rightPointer] === target) {
			return rightPointer;
		} else if (arr[middlePointer] === target) {
			return middlePointer;
		} else if (arr[middlePointer] < target) {
			leftPointer++;
		} else if (arr[middlePointer] > target) {
			rightPointer--;
		}
	}
	return -1;
};

// Original Solution
function binarySearch1(arr, target) {
	var start = 0;
	var end = arr.length - 1;
	var middle = Math.floor((start + end) / 2);
	//okay so the middle declarations seem a little silly?
	while (arr[middle] !== target && start <= end) {
		if (target < arr[middle]) {
			end = middle - 1;
		} else {
			start = middle + 1;
		}
		middle = Math.floor((start + end) / 2);
	}
	if (arr[middle] === target) {
		return middle;
	}
	return -1;
}

// Refactored Version // exactly the same but using less {}
function binarySearch2(arr, target) {
	var start = 0;
	var end = arr.length - 1;
	//also this one uses the middle as being more about the sum of the numbers
	//than the
	var middle = Math.floor((start + end) / 2);

	while (arr[middle] !== target && start <= end) {
		if (target < arr[middle]) end = middle - 1;
		else start = middle + 1;
		middle = Math.floor((start + end) / 2);
	}
	return arr[middle] === target ? middle : -1;
}

console.log(basicBinarySearch(arr1, 5));

//BIG O
//worst and average case is O(log n), best case is O(N)
