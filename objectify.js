let str1 = 'clenyyyt';

const charCount1 = (str) => {
	let result = {};
	for (let char of str) {
		// let char = str[i];
		if (result[char] > 0) {
			result[char]++;
		} else {
			result[char] = 1;
		}
	}
	// return Object.entries(result).sort((a, b) => b[0].localeCompare(a[0])).length - 1;
	return Object.entries(result).sort((a, b) => b[0].localeCompare(a[0]))[0][0];

	//okay so OBject.entries basically turns the object into an array w/ key values being represented by indexes 0,1

	return resultKey;
};

//Refactor w/ for of
// I did not know you could doa  for/ of in a str
//a little simpler for sure

const charCount2 = (str) => {
	let result = {};
	for (let char of str) {
		if (/[a-z0-9]/.test(char)) {
			//I did not know you could do a refactor like that hot damn , very similar to a ternary, I think that may be faster though,
			// okay I get it, it's just functioning as a bit of a check with the equals, not necessarily another full if like a ternary would
			result[char] = result[char]++ || 1;
		}
	}
	// return Object.values(result);
	return result;
};

console.log(charCount1(str1));
