let arr1 = [
	{ name: 'Jim', words: '123' },
	{ name: 'Jeff', words: '1' },
	{ name: 'Bogo', words: '213' },
	{ name: 'Andogo', words: '13' }
];

console.log(arr1.sort((a, b) => a.words - b.words));
