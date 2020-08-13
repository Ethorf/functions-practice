function incrementString(str) {
	let grease = 'grease';
	let lastDigit = parseInt(str[str.length - 1]);
	let arr = str
		.split('')
		.slice(str[0], str.length - 1)
		.join('');

	if (typeof lastDigit === 'number') {
		// return arr + (lastDigit + 1);
		console.log(typeof parseInt(str[str.length - 1]));
	} else {
		console.log(lastDigit);
	}
}

console.log(incrementString('flozin'));

//DINGUS types are checked as if they are strings, Is this where the madness truly begins?
//
