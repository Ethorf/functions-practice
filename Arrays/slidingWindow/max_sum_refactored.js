//find the maximum sum of n digits that are consecutive
//
//SLIDING WINDOW PATTERN
//Make a window, slide it based on a condition
//usually moves left to right
//

function maxSubarraySum(arr, consecutiveNums) {
	let maxSum = 0;
	let tempSum = 0;
	if (arr.length < consecutiveNums) return null;
	//Okay so this is basically setting the initial max sum to the size of our window at the beginning
	for (let i = 0; i < consecutiveNums; i++) {
		maxSum += arr[i];
	}
	//Here we set our temp variable
	tempSum = maxSum;
	//So our iteration starts at one beyond where our initial max sum is and iterates forward to the end of the array
	//
	for (let i = consecutiveNums; i < arr.length; i++) {
		// so here we subtract from tempSum the first index from the array, and add the the last
		//thus sliding the window forward one
		tempSum = tempSum - arr[i - consecutiveNums] + arr[i];
		maxSum = Math.max(maxSum, tempSum);
	}
	return maxSum;
}

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
