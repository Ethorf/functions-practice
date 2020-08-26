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

let arr1 = [2, 3, 1, 2, 4, 3]; //target = 7 /// 2 because [4,3] is the smallest subarray
let arr2 = [2, 1, 6, 5, 4]; // target 9 /// 2 because [5,4] is the smallest subarray

console.log(minSubArrayLength2(arr1, 7));
