const numbos = [1, 3, 5, 6, 7];
const innerCallback = (num) => {
	return num >= 3;
};

const reducify = (acc, curr) => {
	return [innerCallback(curr) === true ? curr : null];
};

console.log(numbos.reduce(reducify, []));
// console.log(innerCallback(3));

function filter(arr, callback) {
	let results = [];
	arr.reduce((acc, curr) => {
		if (callback(curr)) {
			results.push(curr);
		}
	});
	return results;
}
