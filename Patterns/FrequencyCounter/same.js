function comp(array1, array2) {
	let same = false;
	let arr2Sort = array2.sort((a, b) => a - b);
	let arr1Mult = array1
		.map((item) => {
			return item * item;
		})
		.sort((a, b) => a - b);

	for (let i = 0; i < arr1Mult.length; i++) {
		if (arr1Mult[i] == arr2Sort[i]) {
			same = true;
		} else {
			same = false;
		}
	}
	return same;
}

// a = [121, 144, 19, 161, 19, 144, 19, 11];
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

a = [121, 144, 19, 161, 19, 144, 19, 11];
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361];

//so we hmmm
// maybe we could could first
//okay so using .sort() means that if a - b == <0, sort a to an index lower than b.

console.log(comp(a, b));
