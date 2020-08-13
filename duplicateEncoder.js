function duplicateEncode(word) {
	let wordArr = word.toLowerCase().split('');
	let result = [];
	wordArr.forEach((item) => {
		let inCount = 0;
		wordArr.map((jtem) => (jtem === item ? inCount++ : null));
		if (inCount > 1) {
			result.push(')');
		} else {
			result.push('(');
		}
	});
	return result.join('');
}

console.log(duplicateEncode('recede'));

//"din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

// so part of my solution was to account for the fact that it will always acknowledge itself as in the element
