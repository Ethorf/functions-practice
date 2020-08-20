let arr1 = [2, 3, 1];
let arr2 = ['a', 'b', 'c', 'b'];
let arr3 = ['a', 'b', 'c', 'd', 'd'];
let arr4 = [1, 2, 3, 2];

const areThereDuplicates = (arr) => {
	if (typeof arr[0] === 'string') {
		arr.sort();
	} else {
		arr.sort((a, b) => a - b);
	}

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === arr[i + 1]) return true;
	}
	return false;
};
//Frequency counter solution
function areThereDuplicates2() {
	let collection = {};
	for (let val in arguments) {
		collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
	}
	return collection;
	// for(let key in collection){
	//   if(collection[key] > 1) return true
	// }
	// return false;
}
//Multiple Pointers Solution
//This one seems to be more or less exactly what I did but extra work to declare another pointer
//especially when the second pointer has a linear relationship to
function areThereDuplicates3(...args) {
	// Two pointers
	args.sort((a, b) => a > b);
	let start = 0;
	let next = 1;
	while (next < args.length) {
		if (args[start] === args[next]) {
			return true;
		}
		start++;
		next++;
	}
	return false;
}

console.log(areThereDuplicates3(arr3));
