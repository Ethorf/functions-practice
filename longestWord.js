const noPunc = ['jim', 'slenth', 'boba'];
const punc = ['jim', 'slenth', 'boba!!!!'];

const re = /at/;
const num = 45;
const cat = 'cat';
const nonPunc = /[^a-z]+/;

const sentence = 'flent! was the  nargest  bargest largest!!! man';

function LongestWord(sen) {
	// code goes here
	let senArr = sen.split(' ');
	let senMod = sen
		.toLowerCase()
		.split(' ')
		.map((word) => word.replace(nonPunc, ''))
		.sort((a, b) => a.length - b.length);

	let longestLength = senMod[senMod.length - 1].length;
	for (let i = 0; i < senArr.length; i++) {
		if (senArr[i].length === longestLength) {
			return senArr[i];
		}
	}
}

// keep this function call here
// console.log(cat.search(re));
console.log(LongestWord(sentence));
