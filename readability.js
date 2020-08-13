// (readability) index = 0.0588 * L - 0.296 * S - 15.8
//L is the average number of letters per 100 words in the text, S is the average number of sentences per 100 words in the text.
//We need to find the number of words, the number of letters, and the number of sentences

// Harry Potter was a highly unusual boy in many ways. For one thing, he hated the summer holidays more than any other time of year. For another, he really wanted to do his homework, but was forced to do it in secret, in the dead of the night. And he also happened to be a wizard.
// should be 382.14 and 7.14
//When he was nearly thirteen, my brother Jem got his arm badly broken at the elbow. When it healed, and Jem's fears of never being able to play football were assuaged, he was seldom self-conscious about his injury. His left arm was somewhat shorter than his right; when he stood or walked, the back of his hand was at right angles to his body, his thumb parallel to his thigh.
// This should be 295 letters
//It was a bright cold day in April, and the clocks were striking thirteen. Winston Smith, his chin nuzzled into his breast in an effort to escape the vile wind, slipped quickly through the glass doors of Victory Mansions, though not quickly enough to prevent a swirl of gritty dust from entering along with him.
//should be 250 letters, 55 words
function sentenceCounter(sentence) {
	let sentenceCounter = 0;
	let sentenceArr = sentence.split('');
	for (let i = 0; i < sentenceArr.length; i++) {
		if (sentenceArr[i] === '.' || sentenceArr[i] === '?' || sentenceArr[i] === '!') {
			sentenceCounter++;
		}
	}
	return sentenceCounter;
}
function wordCounter(sentence) {
	let wordCounter = 1;
	let wordArr = sentence.split('');
	for (let i = 0; i < wordArr.length; i++) {
		if (wordArr[i] === ' ') {
			wordCounter++;
		}
	}
	return wordCounter;
}
function letterCounter(sentence) {
	let letterCounter = 0;
	let letterArr = sentence.split('');
	for (let i = 0; i < letterArr.length; i++) {
		if ((letterArr[i] >= 'a' && letterArr[i] <= 'z') || (letterArr[i] >= 'A' && letterArr[i] <= 'Z')) {
			letterCounter++;
		}
	}
	return letterCounter;
}

function gradeLevel(content) {
	let L = (letterCounter(content) / wordCounter(content)) * 100;
	let S = (sentenceCounter(content) / wordCounter(content)) * 100;
	let grade = 0.0588 * L - 0.296 * S - 15.8;
	let gradeInt = Math.round(grade);
	console.log(`Number of Letters: ${letterCounter(content)}`);
	console.log(`Number of Words: ${wordCounter(content)}`);
	console.log(`Number of Sentences: ${sentenceCounter(content)}`);
	return gradeInt;
}

console.log(
	gradeLevel(
		'As the average number of letters and words per sentence increases, the Coleman-Liau index gives the text a higher reading level. If you were to take this paragraph, for instance, which has longer words and sentences than either of the prior two examples, the formula would give the text an eleventh grade reading level.'
	)
);
