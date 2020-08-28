const sumRangeAscending = (num) => {
	if (num === 1) return 1;
	return num + sumRangeAscending(num - 1);
};

console.log(sumRangeAscending(6));
