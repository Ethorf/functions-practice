const subProdAndSum = (num) => {
	let numArr = num.toString().split('');
	let product = numArr.reduce((a, b) => a * b);
	let sum = numArr.map((x) => parseInt(x)).reduce((a, b) => a + b);

	return product - sum;
};

// Input: n = 234
// Output: 15
// Explanation:
// Product of digits = 2 * 3 * 4 = 24
// Sum of digits = 2 + 3 + 4 = 9
// Result = 24 - 9 = 15

console.log(subProdAndSum(4421));
