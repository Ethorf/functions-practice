//Naive Solution
let arr1 = [2, 6, 9, 2, 1, /* initial count stops here */ 8, 5, 3];
const maxSubarraySum1 = (arr, num) => {
	if (num > arr.length) {
		return null;
	}
	let max = Infinity;
	for (let i = 0; i < arr.length - num; i++) {
		let temp = 0;
		//okay so this increments the j
		for (let j = 0; j < num; j++) {
			temp += arr[i + j];
		}
		if (temp > max) {
			max = temp;
		}
	}
	return max;
};

const maxSubarraySum2 = (arr, num) => {
	let maxSum = 0;
	let tempSum = 0;
	if (num > arr.length) return null;

	// So this loop just checks the initial window
	for (let i = 0; i < arr.length - num; i++) {
		maxSum += arr[i]; //
	}
	tempSum = maxSum;
	for (let i = num; i < arr.length; i++) {
		tempSum = tempSum - arr[i - num] + arr[i];
		maxSum = Math.max(maxSum, tempSum);
	}
	return maxSum;
};

console.log(maxSubarraySum2(arr1, 3));
