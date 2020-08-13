let samp1 = [1, 4, 1312312312312, 66547, 1232];

const aVeryBigSum = (arr) => {
	return arr.reduce((a, b) => a + b);
};

console.log(aVeryBigSum(samp1));
