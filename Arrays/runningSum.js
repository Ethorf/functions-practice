let nums1 = [1, 2, 3, 4];
let nums2 = [1, 1, 1, 1, 1];

// console.log(runningSum(nums1));
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

const runningSum = (arr) => {
	arr.forEach((item, index, arr) => {
		if (index > 0) {
			arr[index] = item + arr[index - 1];
		}
	});
	return arr;
};

console.log(runningSum(nums2));
