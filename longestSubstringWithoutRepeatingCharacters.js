const lsswrc = (string) => {
	let uniqueArr = [];
	let stringArr = string.split('');
	stringArr.map((letter) => {
		for (let i; i < stringArr.length; i++) {
			let subArr = [];

			if (!subArr.includes(letter)) {
				subArr.push(letter);
			}
			uniqueArr.push(subArr);
		}
	});
	return uniqueArr;
};

console.log(lsswrc('pwwkewp'));

//Input: "abcabcbb"

// this problem seems similar to the pangram one a bit
// it seems like I will need to check each character against all other characters (start with a nested for loop)
// I will also need to track at which point this repeating character occurs
//perhaps by checking the indexs of this
// i am intuiting there being some difficulty in not just seeing how many times the initial character repeats
//perhaps as I loop along I could be pushing each element into a uniq arr (maybe this ameliorates the nested problem?)
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
//              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

//okay so this is working but now only if the uniqueness is at the beginning
//I need to basically check if there is a sequnce of uniqueness
//one way could be to modify the unique array in relation to the original string

//ookay so right now It's just checking if this has allready been added to the array but initially everything is unique so that's not neccessarily helpful

//Now I am thinking something along the lines of maybe making an array of arrays that each contain the longest substring and then checking each one individually
//hmm this is getting a little tangly, I am having trouble thinking about how the nested for loop would exist in this context
