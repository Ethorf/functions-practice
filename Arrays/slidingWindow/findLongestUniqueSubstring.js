//could do this a couple of ways, the sliding window way I definitely need to try out
// I feel like I could accomplish this with an array.includes or just an object
//I probably need to practice the object kind a little more

const findLongestUniqueSubString = (str) => {
	let splitString = str.split('');
	let arrays = [];
	let looping = true;

	for (let i = 0; i < splitString.length && looping === true; i++) {
		let tempArray = [];
		if (!tempArray.includes(splitString[i])) {
			tempArray.push(splitString[i]);
		} else {
			arrays.push(tempArray);
			looping = false;
		}
	}
	return arrays;
};

let str1 = 'rithmschool'; // 7
let str2 = 'thisisisawesome'; //

console.log(findLongestUniqueSubString(str1));
