let numbers1 = [2, 7, 11, 15];
let numbers2 = [0, 0, 3, 4]; // should be [1,2] w/ a target of 0

var twoSumSorted = function (numbers, target) {
	let sum1;
	let sum2;
	for (let i = 0; i < numbers.length; i++) {
		for (let j = i + 1; j < numbers.length; j++) {
			console.log(`i:${i} j:${j}`);
			if (numbers[i] + numbers[j] === target) {
				sum1 = i + 1;
				sum2 = j + 1;
			}
		}
	}
	return [sum1, sum2];
};
console.log(twoSumSorted(numbers2, 0));
