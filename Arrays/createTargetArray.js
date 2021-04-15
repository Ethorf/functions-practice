const createTargetArray = (nums, indexes) => {
	let arr = [];
	for (let i = 0; i < nums.length; i++) {
		arr.splice(indexes[i], 0, nums[i]);
	}
	return arr;
};
console.log(createTargetArray([1, 2, 3, 4, 0], [0, 1, 2, 3, 0]));
