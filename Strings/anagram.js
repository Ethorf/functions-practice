const anagram = (str1, str2) => {
	if (str1.length !== str2.length) {
		return false;
	}
	return str1.split('').sort().join('') === str2.split('').sort().join('');
};

const anagram2 = (str1, str2) => {
	if (str1.length !== str2.length) {
		return false;
	}
	let frequencyCounter1 = {};
	let frequencyCounter2 = {};
	for (let val of str1) {
		frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
	}
	for (let val of str2) {
		frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
	}
	for (let key in frequencyCounter1) {
		if (!(key in frequencyCounter2)) {
			return false;
		}
		if (frequencyCounter2[key] !== frequencyCounter1[key]) {
			return false;
		}
	}
	return true;
};
function anagram3(first, second) {
	if (first.length !== second.length) {
		return false;
	}
	//Okay so this one just initializes one object instead
	const lookup = {};
	//loops through our first anagram
	for (let i = 0; i < first.length; i++) {
		//this assigns our letters to our keys
		let letter = first[i];
		// if letter exists, increment, otherwise set to 1
		lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
	}
	//second loop
	for (let i = 0; i < second.length; i++) {
		let letter = second[i];
		// can't find letter or letter is zero then it's not an anagram
		if (!lookup[letter]) {
			return false;
		} else {
			//Then here we are using a subtractive method, which I haven't seen before but seems cool
			//to account for duplicates etc
			lookup[letter] -= 1;
		}
	}

	return true;
}

//this one works really well with sorting
// this would also work for pangram but just checking against abc.. etc
// console.log(anagram2('trooa', 'root'));
// console.log(anagram2('aaz', 'zza'));

console.log('jim'.split('').reverse().join(''));
