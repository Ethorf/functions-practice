function reverse(str) {
	// result = [];
	// let splitString = str.split(' ');
	// splitString.forEach((word) => {
	// 	if (splitString.indexOf(word) % 2 === 1) {
	// 		result.push(word.split('').reverse().join(''));
	// 	} else {
	// 		result.push(word);
	// 	}
	// });
	// if (result.length) {
	// 	return result.join(' ').trim();
	// }
	// return '';

	return str
		.trim()
		.split(' ')
		.map((word) => (str.split(' ').indexOf(word) % 2 === 1 ? word.split('').reverse().join('') : word))
		.join(' ');
}
//I guess this could maybe be better done with a Regex
// if you see a string, can you use a regex,
// in general this seems to compensate for the fact that spaces are ignored with the whole split method etc?

console.log(reverse('Reverse this string, please!'));

// console.log(2 % 2);

//The solution I liked had basically a one liner with a map etc and an inline ternary expression. That shit was cool for sure.
//the other one had a for loop starting at one and incrementing by 2 which was also cool
