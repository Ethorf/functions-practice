const sentence1 = 'Bob ate jeff';
const sentence2 = 'Obo teem Actual';
const sentence3 = 'I speak Goat Latin';
const noVowel = (word) => {
	let firstLetter = word[0];
	let wordArr = word.split('');
	wordArr.shift();
	wordArr.push(firstLetter);
	wordArr.push('ma');
	return wordArr.join('');
};
let a = 'a';
function goatLatin(sen) {
	let senArr = sen.split(' ');
	let vowelBeginning = /^(a|e|i|o|u|A|E|I|O|U)/;
	return senArr.map((item, index) =>
		item.search(vowelBeginning) === 0 ? item + 'ma' + a.repeat(index + 1) : noVowel(item) + a.repeat(index + 1)
	);
}

console.log(goatLatin(sentence3));

// console.log(a.repeat(3));
//if a word begins with a vowel, append ma to the front of the word
// could use maybe a map with if's and then a regex for this

//if a word begins with not a vowel, remove the first letter and append it to the end, and then add ma
//add one letter a to the end of each word as per it's index + 1
//feel like I could possibly use a .fill for the last part

// I need to split this boy, as the first step always is
