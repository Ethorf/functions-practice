//This is a string to integer but fairly complex thing

let test1 = '42'; //42
let test2 = '   -42'; //42
let test3 = '4193 with words'; //4193
let test4 = 'with 4193 with words'; //4193
let test5 = '-91283472332'; //4193
let test6 = '   +0 123'; // 0
let test7 = '     +004500';

//first we will check for whitespace characters
//then we will check if the character is a number or + / -
//then we will return the parsed string checking for int min/maxness

const atoi = (str) => {
	let noSpaces = str.replace(/^\s+/, '');
	let intParsed = Number.parseInt(noSpaces);
	if (Number.isNaN(intParsed)) {
		return 0;
	} else if (intParsed < -2147483648) {
		return -2147483648;
	} else if (intParsed > 2147483648) {
		return 2147483648;
	}
	return intParsed;
	// return noSpaces;
};

console.log(atoi(test7));
