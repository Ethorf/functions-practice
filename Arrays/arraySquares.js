//Take in twoarrays, make sure they are the same length
//I was thinking to sort first
//

//NAIVE SOLUTION
const same = (arr1, arr2) => {
	if (arr1.length !== arr2.length) {
		return false;
	}

	for (let i = 0; i < arr1.length; i++) {
		//Had totally forgotten that ** is an exponent
		//so here we just checking if this squared unit exists at all in our second array and returning false if not
		//reminder that .indexOf returns -1
		let correctIndex = arr2.indexOf(arr1[i] ** 2); //I also hadn't thought of .indexOf as being a check before, without having to use an explicit loop, though it is a loop
		//though this may be primitive it is at least something to be aware of
		if (correctIndex === -1) {
			return false;
		}
		//the splice will remove something from the array, this will account for duplication as well as give us less elements to check every time
		arr2.splice(correctIndex, 1);
	}
	return true;
};

let testArr1 = [1, 3, 4];
let testArr2 = [1, 9, 16];

const same2 = (arr1, arr2) => {
	if (arr1.length !== arr2.length) {
		return false;
	}

	let frequencyCounter1 = {};
	let frequencyCounter2 = {};
	//Remember for of loops VALUES ofVa
	//okay so these are just populating the array with the number of occurences of each
	for (let val of arr1) {
		frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
	}
	for (let val of arr2) {
		frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
	}

	for (let key in frequencyCounter1) {
		//this one checks if the exponentiated key is in the second obj
		if (!(key ** 2 in frequencyCounter2)) {
			return false;
		}
		//this one checks for duplicates

		if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
			return false;
		}
	}
};

console.log(same2(testArr1, testArr2));
