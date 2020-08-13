let string = 'Dermatoglyphics';

function isIsogram(str) {
	let loStr = str.toLowerCase();
	let repChar = 0;
	for (let i = 0; i < loStr.length; i++) {
		for (let j = i + 1; j < loStr.length; j++) {
			if (loStr[i] === loStr[j]) {
				repChar++;
			}
		}
	}
	if (repChar > 0) {
		return false;
	}
	return true;
}
console.log(isIsogram(string));

//Best Practicies
//you could use a regex to test for repetition in a string
//there's also something called a "Set" in js, which is an ES6 thing
