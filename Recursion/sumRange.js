const sumRange = (num) => {
	if (num === 1) return 1;
	return num + sumRange(num - 1);
	//basically keeps linking back to the beginning if the break doesn't hit
};

console.log(sumRange(4));
