let nums1 = [0, 0, 1, 1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 6];
let nums2 = [1, 1, 2];

const removeDuplicatesSorted = (nums) => {
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === nums[i + 1]) {
			nums.splice(i, 1);
			i--;
		}
	}
	return nums;
};

console.log(removeDuplicatesSorted(nums2));
