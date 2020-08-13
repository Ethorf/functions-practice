/**
 * @param {number} x
 * @return {number}
 */
const reverseInteger = function (int) {
	let transformedInt = int.toString().split('');
	let positiveReversal = Number.parseInt(int.toString().split('').reverse('').join(''));
	let negativeReversal;

	if (transformedInt[0] === '-') {
		transformedInt.shift();
		transformedInt.reverse('');
		transformedInt.unshift('-');
		negativeReversal = Number.parseInt(transformedInt.join(''));
	}

	if (transformedInt[0] === '-' && negativeReversal >= -2147483647) {
		return negativeReversal;
	} else if (positiveReversal <= 2147483647) {
		return positiveReversal;
	} else {
		return 0;
	}
};
console.log(reverseInteger(-4321));
// console.log(reverseInteger(-321));
