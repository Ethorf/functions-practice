const decompRLEList = (nums) => {
	let splitsArr = [];
	let resArr = [];

	for (let i = 0; i < nums.length; i = i + 2) {
		splitsArr.push([nums[i], nums[i + 1]]);
	}
	splitsArr.map((arr) => {
		for (let i = 0; i < arr[0]; i++) {
			resArr.push(arr[1]);
		}
	});

	return resArr;
};

// Input: nums = [1,2,3,4]
// Output: [2,4,4,4]
// Explanation: The first pair [1,2] means we have freq = 1 and val = 2 so we generate the array [2].
// The second pair [3,4] means we have freq = 3 and val = 4 so we generate [4,4,4].
// At the end the concatenation [2] + [4,4,4] is [2,4,4,4].

console.log(decompRLEList([1, 2, 3, 4]));
