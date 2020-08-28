const collectOddValues = (arr) => {
	let result = [];

	const helper = (helperArr) => {
		if (helperArr.length === 0) {
			return;
		}
		if (helperArr[0] % 2 !== 0) {
			result.push(helperArr[0]);
		}
		//This calls the recursive helper function
		// on the input of itself with one less element at the beginning
		helper(helperArr.slice(1));
	};
	helper(arr);

	return result;
};
