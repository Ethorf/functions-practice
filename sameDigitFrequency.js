//check if the two digits have the same frequency of digits

// 182, 281 => True
//34, 14 => false
const sameFrequency = (digit1, digit2) => {
	return digit2.toString().split('').sort().join('') === digit2.toString().split('').sort().join('');
};
console.log(sameFrequency(182, 281));
