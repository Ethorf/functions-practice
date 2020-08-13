let arr1 = [
	[1, 1, 1, 0, 0, 0],
	[0, 1, 0, 0, 0, 0],
	[1, 1, 1, 0, 0, 0],
	[0, 0, 2, 4, 4, 0],
	[0, 0, 0, 2, 0, 0],
	[0, 0, 1, 2, 4, 0]
];

const hourglass = (arr) => {
	let totalResults = [];
	for (let j = 0; j <= 3; j++) {
		for (let i = 0; i <= 3; i++) {
			let result = [];
			result.push(arr[j][i]);
			result.push(arr[j][i + 1]);
			result.push(arr[j][i + 2]);
			result.push(arr[j + 1][i + 1]);
			result.push(arr[j + 2][i]);
			result.push(arr[j + 2][i + 1]);
			result.push(arr[j + 2][i + 2]);
			totalResults.push(result.reduce((a, b) => a + b));
		}
	}
	return totalResults.sort((a, b) => a - b)[totalResults.length - 1];
};

console.log(hourglass(arr1));

// each 6x6 array has 16 hourglass' (4 across x 4 down )
// two loops, the first one going horizontal the second going vertical
// try the horizontal one first?
// .sort( ) is the thing that takes that reducer functerito
