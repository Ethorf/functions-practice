let testArr = [
	[18, 20],
	[45, 2],
	[61, 12],
	[37, 6],
	[21, 21],
	[78, 9]
];

function openOrSenior(data) {
	let resultArr = [];
	data.forEach((item) => {
		if (item[0] >= 55 && item[1] > 7) {
			resultArr.push('Senior');
		} else {
			resultArr.push('Open');
		}
	});
	return resultArr;
}

console.log(openOrSenior(testArr));

//Best Practices Result
//try to use a ternary more often than not if you can

function openOrSeniorBest(data) {
	return data.map(([age, handicap]) => (age > 54 && handicap > 7 ? 'Senior' : 'Open'));
}
