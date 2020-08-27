//Okay so in this one our window size will change where as before our window size was fiex
//Okay so this whole problem isn't really moving the window this is judging new windows every time

const minSubArrayLength = (arr, targetSum) => {
	let minArray = [];
	let tempArray = [];
	let tempSum = 0;
	let windowLeft = 0;
	let windowRight = 0;

	//Okay so I guess this is just setting the initial sum // window
	for (let i = 0; i < arr.length; i++) {
		for (let j = i; j < arr.length; j++) {
			if (tempSum < targetSum) {
				let tempArray2 = [];
				tempSum += arr[j];
				tempArray.push(arr[j]);
			}
		}
	}

	// minArray = tempArray;
	//maybe have this kind of combine with the multiple pointers idea and have both edges of the
	//window moving according to different conditions?
	// for (let i = 0; i < arr.length; i++) {}
	return minArray;
};

const minSubArrayLength2 = (arr, targetSum) => {
	let minArray = [];
	let tempArray = [];
	let tempSum = 0;
	let leftWindow = 0;
	let rightWindow = 1;

	if (arr.slice().sort((a, b) => b - a)[0] >= targetSum) return 1;

	while (rightWindow < arr.length) {
		for (let i = leftWindow; i <= rightWindow; i++) {
			console.log(`arr[i] is ${arr[i]}`);
			tempArray.push(arr[i]);
			tempSum += arr[i];
		}
		if (tempSum >= targetSum) {
			return tempArray.length;
		} else {
			rightWindow++;
		}
	}

	return tempArray;
};
//Okay so describing this as far as what I want to do with it.
//I want to start the array by checking the first two elements and summing them to the temp sum
//if the temp sum is less than the target sum, I will increment the right window and add that to the temp sum
const minSubArrayLength3 = (arr, targetSum) => {
	let leftWindow = 0;
	let tempArray = [arr[0], arr[1]];
	let lengthArray = [];
	let tempSum = arr[0] + arr[1];

	if (arr.slice().sort((a, b) => b - a)[0] >= targetSum) return 1;

	for (let rightWindow = 1; rightWindow < arr.length; ) {
		if (tempSum < targetSum) {
			rightWindow++;
			if (arr[rightWindow] !== undefined) {
				tempArray.push(arr[rightWindow]);
			}
			tempSum += arr[rightWindow];
		} else if (tempSum >= targetSum) {
			tempArray.shift();
			if (tempArray.reduce((a, b) => a + b) >= targetSum) {
				lengthArray.push(tempArray.length);
			}
			leftWindow++;
			tempSum -= arr[leftWindow];
		}
	}
	if (tempArray.reduce((a, b) => a + b) < targetSum) {
		return 0;
	}
	return lengthArray.sort((a, b) => a - b)[0];
};

///Below is the solution from the course
function minSubArrayLength4(arr, sum) {
	let total = 0;
	let leftWindow = 0;
	let rightWindow = 0;
	let minLen = Infinity;

	//Okay so the while was a good idea but I needed a break
	while (leftWindow < arr.length) {
		// if current window doesn't add up to the given sum then
		// move the window to right
		//Okay so this initialized them to 0 and just added the rightWindow to the sum initially
		if (total < sum && rightWindow < arr.length) {
			total += arr[rightWindow];
			rightWindow++;
		}
		// if current window adds up to at least the sum given then
		// we can shrink the window
		else if (total >= sum) {
			//Okay this thing I'll need to think of a little bit
			minLen = Math.min(minLen, rightWindow - leftWindow);
			total -= arr[leftWindow];
			leftWindow++;
		}
		// current total less than required total but we reach the rightWindow, need this or else we'll be in an infinite loop
		else {
			break;
		}
	}

	return minLen === Infinity ? 0 : minLen;
}

let arr1 = [2, 3, 1, 2, 4, 3]; //target = 7 /// 2 because [4,3] is the smallest subarray
let arr2 = [2, 1, 6, 5, 4]; // target 9 /// 2 because [5,4] is the smallest subarray
let arr3 = [1, 4, 16, 22, 5, 7, 8, 9, 10]; // target 95
console.log(minSubArrayLength3(arr1, 7));
