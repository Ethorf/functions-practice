let sentence1 = 'bob wassa a huge china-bitch. nobody liked his ass';
//turn all words of length 4 or more into abbreviations
//the abbreviation will have the first letter, last letter, and the number of letters total in the word
//if the word has a hyphen it will count for two words
let individualAbbreviate = (word) => {
	return `${word[0]}${word.length - 2}${word[word.length - 1]}`;
};
// const words = /\w+/g;
// const abbreviate = (str) => {
// 	let splitString = str.split(' ');

// 	return splitString.map((item) => (item.length >= 4 ? item.split.('').includes(/\W/) ? individualAbbreviate(item) : item));
// };

// console.log(abbreviate(sentence1));

let elephant = 'elephant-ride is great job!';
// console.log(hyphen.includes('-'));

elephant.match(/\W/g).length > 0;
let gongle = 'gongle';

const splitChars = (str) => {
	let nonWord = str.match(/\W/);
	let wordSplit = str.split(/\W/);
	return individualAbbreviate(wordSplit[0]) + nonWord + individualAbbreviate(wordSplit[1]);
};
//.includes cannot take a regex (as the first argument?)

//This matches everything that is not a word and is a space
console.log(elephant.match(/(\W|\s)/g));
//this matches all words
console.log(elephant.replace(/\w{4,}/g, individualAbbreviate));

///Final solution

function abbreviate(string) {
	let individualAbbreviate = (word) => {
		return `${word[0]}${word.length - 2}${word[word.length - 1]}`;
	};
	return string.replace(/\w{4,}/g, individualAbbreviate);
}
