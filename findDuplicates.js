const array1 = [1, 4, 5, 3, 3];

const findDuplicateBrute = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[i] == arr[j]) {
				return arr[i];
			}
		}
	}
	return false;
};
//Pros: space efficient, not time efficient o(n2)

// alot of the time you can just use an object to represent a hash table
//more time efficient but not as space efficient
const findDuplicateHash = (arr) => {
	let obj = {};

	for (let i = 0; i < arr.length; i++) {
		if (obj[arr[i]]) {
			return arr[i];
		}
		//This just assigns the object to be in the hashtable
		obj[arr[i]] = true;
	}
	return obj;
};
//This one is representing a hashTable with an array, where index(i) + 1 = the value in the array
const findDuplicateArrayHash = (arr) => {
	let hashTable = [];

	for (let i = 0; i < arr.length; i++) {
		if (hashTable[arr[i] - 1]) {
			return arr[i];
		}
		hashTable[arr[i] - 1] = true;
	}
	return null;
};
// you could sort it and then keep going until you find two numbers that are the same
// keep cognizant of space vs. time complexity
console.log(findDuplicateArrayHash(array1));
