let data1 = {
	Happy: 0.1790481743,
	Angry: 0.0398548417,
	Bored: 0.3701161774,
	Fear: 0.2134809464,
	Sad: 0.0972747185,
	Excited: 0.1002251417
};

const displayEmotions = (data) => {
	let highestRankEmotion = Object.values(data)
		.sort((a, b) => a - b)
		.reverse()[0];
	let secondHighestRankEmotion = Object.values(data)
		.sort((a, b) => a - b)
		.reverse()[1];
	let predominateEmotion = Object.keys(data).find((key) => data[key] === highestRankEmotion);
	let secondMostPredominateEmotion = Object.keys(data).find((key) => data[key] === secondHighestRankEmotion);

	return `Emotionally, you were mostly ${predominateEmotion} in this entry, followed closely by the emotion of ${secondMostPredominateEmotion}.(according to the Paralell Dots Emotional Analysis API)`;
};

console.log(displayEmotions(data1));
