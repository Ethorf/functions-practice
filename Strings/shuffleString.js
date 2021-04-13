const shuffleString = (s, indices) => {
	let resultArr = [];
	let stringArr = s.split('');
	indices.map((item, index) => (resultArr[item] = stringArr[index]));
	return resultArr.join('');
};

let s1 = 'codeleet';
let indices1 = [4, 5, 6, 7, 0, 2, 1, 3];
// Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// Output: "leetcode"
// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.

console.log(shuffleString(s1, indices1));
