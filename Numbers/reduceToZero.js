const reduceToZero = (num) => {
	let steps = 0;
	if (num === 0) {
		return steps;
	} else {
		while (num > 1) {
			if (num % 2 > 0) {
				num--;
				steps++;
			} else {
				num = num / 2;
				steps++;
			}
		}
		return steps + 1;
	}
};

console.log(reduceToZero(8));
// I feel like there's a recursive solution to this
