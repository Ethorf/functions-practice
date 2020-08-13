function sortByLength(words) {
	return words.sort((a, b) => a.split('').length - b.split('').length);
}

console.log(sortByLength(['x', 'yyy', 'zz']));
