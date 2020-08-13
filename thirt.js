//divide the right most number of the input by the first number in this sequence & repeat this until all digits are accounted
//sum all of these and repeat the process until the remainder is the same as the remainder of the original number % 13

function thirt(num) {
	let remainderTarget = num % 13;
	let remainderSequence = [1, 10, 9, 12, 3, 4, 1, 10, 9, 12, 3, 4];

	// could try using a .fill here? may be kinda crafty

	//
	const numberizeArray = (number) => {
		return String(number)
			.split('')
			.reverse()
			.map((item) => Number.parseInt(item));
	};

	let origSplitNumArray = numberizeArray(num);

	const calculatedArrayRemainder = (splitNum) => {
		let remainderArray = [];
		for (let i = 0; i < splitNum.length; i++) {
			remainderArray.push(splitNum[i] * remainderSequence[i]);
		}
		return remainderArray.reduce((a, b) => a + b) % 13;
	};

	// const checkArrayRemainder = (arr) => {
	//     if ()

	// };
	// if (calculatedArrayRemainder(origSplitNumArray) % 13 !== remainderTarget) {
	// 	return calculatedArrayRemainder(origSplitNumArray) % 13;
	// }

	return calculatedArrayRemainder(origSplitNumArray);
	// return remainderTarget;
	// return splitNumArray;
}

// console.log(1234567 % 13);
// console.log(87 % 13);
//These two should be equal above
// you will want to return the number at which this is stationary
//the numbers being "stationary" seems to refer to the point at which they are 'thirtified' having the same outcome

// console.log(thirt(1234567));

// console.log(
// 	`remainder of 87 % 13:${87 % 13},remainder of 1234657 % 13:${1234567 % 13}, remainder of 178 % 13:${178 % 13}`
// );
