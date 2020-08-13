// function duplicateEncode(word) {
// 	// let result = [];
// 	let wordArr = word.split('');
// 	// for (let i = 0; i < wordArr.length; i++) {
// 	// 	// if (wordArr.includes(wordArr[i], i + 1)) {
// 	// 	if (wordArr.filter((item) => item !== wordArr[i]).includes(wordArr[i])) {
// 	// 		result.push(')');
// 	// 	} else {
// 	// 		result.push('(');
// 	// 	}
// 	// }
// 	// return result.join('');

// }

// .filter((item) => item !== wordArr[i])
// console.log(duplicateEncode('dind'));
console.log(duplicateEncode('dind'));

//"din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

// filter, includes, or a for loop?
//okay or I could try just removing the current item?
// for loops are easier for me to understand right now for sure
//okay so the problem with the .includes right now is that it is asking "does the array include this element", which it always does because
// it is referencing itself
//hmm maybe could try a .reduce eventually
