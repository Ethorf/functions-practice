//okay I was misinterpreting this problem a bit
// a better approach would be to turn the whole thing into a string, then a single number first and then split it after
//you don't need to have any multiple digits etc

let arr1 = [2, 3, 4, 9];
let arr2 = [9, 9];

// var plusOne = function (digits) {
// 	const splitInt = (int) => {
// 		return int
// 			.toString()
// 			.split('')
// 			.map((item) => Number.parseInt(item));
// 	};
// 	if (digits.length > 1) {
// 		digits[digits.length - 1]++;
// 	} else {
// 		digits[0]++;
// 		if (digits[0] > 9) {
// 			digits = splitInt(digits[0]);
// 		}
// 	}
// 	return digits;
// };

var plusOne = function (digits) {
	const splitInt = (int) => {
		return int
			.toString()
			.split('')
			.map((item) => Number.parseInt(item));
	};
	let incremented = Number.parseInt(digits.join('')) + 1;
	if (digits[digits.length - 1] !== 9) {
		digits[digits.length - 1]++;
		return digits;
	} else {
		return splitInt(incremented);
	}
};

console.log(plusOne(arr2));
