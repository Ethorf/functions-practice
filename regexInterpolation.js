let word1 = 'gordon';
let text1 = 'billy was a niblit but not as bad as gordon';
let text2 = 'i wonder how many jim jims there are. i wonder i wonder how many biff biff exists';

let phrase1 = 'i wonder';

const matchPhrase = (phrase, text) => {
	let re = new RegExp(phrase, 'g');
	return text.match(re).length;
};

// console.log(matchPhrase(phrase1, text2));

const flundy = {
	3: 'jeff',
	flubber: 'jedeff',
	true: 'jedeff'
};

console.log(flundy.flubber);
