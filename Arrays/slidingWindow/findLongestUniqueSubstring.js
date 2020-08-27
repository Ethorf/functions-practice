//could do this a couple of ways, the sliding window way I definitely need to try out
// I feel like I could accomplish this with an array.includes or just an object
//I probably need to practice the object kind a little more

const findLongestUniqueSubString = (str) => {
	let splitString = str.split('');
	let arrays = [];

	let count = {};

	//okay so you can loop through a string as if it's an array using an object (ofVa) syntax
	//Maybe this is why people hate javascript
	// you can just use this one below to implement the object with all the unique chars
	for (let char of str) {
		count[char] = 0;
	}

	for (let i = 0; i < splitString.length; i++) {
		let tempArray = [];
		if (!tempArray.includes(splitString[i])) {
			tempArray.push(splitString[i]);
		} else {
			arrays.push(tempArray);
			looping = false;
		}
	}
	return count;
};

const findLongestUniqueSubString2 = (str) => {
	let countObj = {};
	let longest = 0;
	let leftWindow = 0;

	//okay so you can loop through a string as if it's an array using an object (ofVa) syntax
	// you can just use this one below to implement the object with all the unique chars, I prefer this to the other solution
	//populate the object first

	for (let char of str) {
		countObj[char] = 0;
	}

	for (let rightWindow = 0; rightWindow < str.length; rightWindow++) {
		//This is first step in the loop increments the count of the letter at the
		//right window index by one, and does this every time
		countObj[str[rightWindow]] += 1;
		//Then we check if the countObj has any values in it that are greater than 1 (duplicates)

		if (Object.values(countObj).some((element) => element > 1)) {
			countObj[str[leftWindow]] -= 1; // decrement the element at leftWindow by 1, since the character is no longer in the window
			leftWindow += 1; // increment leftWindow to evaluate the next substring
			//This step will usually not happen in the first case
		}
		// and then every single time we increase the right window, so we can keep this in the initial loop declaration
		longest = Math.max(longest, rightWindow - leftWindow + 1); //This finds the maximum between longest
		//and rightwindow - leftWindow(gives us the size of the window)
	}
	// return countObj;
	return longest;
};

function findLongestUniqueSubstring3(str) {
	let longest = 0;
	let seen = {};
	let start = 0;

	for (let i = 0; i < str.length; i++) {
		let char = str[i];
		if (seen[char]) {
			start = Math.max(start, seen[char]);
		}
		// index - beginning of substring + 1 (to include current in count)
		longest = Math.max(longest, i - start + 1);
		// store the index of the next char so as to not double count
		seen[char] = i + 1;
	}
	return longest;
}
let str1 = 'rithmschool'; // 7
let str2 = 'thisisisawesome'; //
//

console.log(findLongestUniqueSubString2(str1));
