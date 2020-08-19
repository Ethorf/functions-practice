//This is a "Multiple Pointers" style problem
//Write a function which accepts a sorted array of integers. The function should find the first pair where the sum is zero.

//Naive Solution below
const sumZero1 = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] === 0) {
				return [arr[i], arr[j]];
			}
		}
	}
};

//Below is refactored #1
const sumZero2 = (arr) => {
	let left = 0;
	let right = arr.length - 1;
	//2 "pointers" starting from opposite sides of the array
	//the left < right makes sure you don't check an index against itself
	while (left < right) {
		let sum = arr[left] + arr[right];
		if (sum === 0) {
			return [arr[left], arr[right]];
		} else if (sum > 0) {
			right--;
		} else {
			left++;
		}
	}
};

//Seems very similiar to the below function
var twoSum = function (nums, target) {
	let correctArr = [];
	//Loop one
	for (let i = 0; i < nums.length; i++) {
		//Loop 2
		for (let j = 0; j < nums.length; j++) {
			console.log(`${nums[i]} + ${nums[j]} = ${nums[i] + nums[j]}`);
			if (nums[i] + nums[j] === target) {
				correctArr[1] = i;
				correctArr[0] = j;
			}
		}
	}
	return correctArr;
};

console.log(sumZero2([-4, -3, -2, -1, 0, 1, 2, 5]));
