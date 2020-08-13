let arr1 = [3, 5, 4, 6, 5, 7];
let arr2 = [31, 5, 40, 62, 73, 7];
let arr3 = [1, 45, 42, 612, 743, 7];
let arr4 = [1, 2, 3, 4, 5];

const leftRotation = (arr, rotations) => {
	let elementsToAppend = [];
	for (let i = 0; i <= rotations - 1; i++) {
		elementsToAppend.push(arr.shift());
	}
	return arr.concat(elementsToAppend);
};

console.log(leftRotation(arr4, 2));

// could use a for loop for a number of pops

let jeff = {
	1: 'fluddy',
	dudner: 'fluaaddy'
};
console.log(jeff.'1');
