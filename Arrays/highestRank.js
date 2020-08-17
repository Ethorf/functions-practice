//return the number that occurs the most times in the array
// seems like this may be a good case to map something to an object
// this also seems like a fairly similiar strain of problem as many others

// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

let arr1 = [12, 10, 8, 12, 7, 6, 4, 4, 4, 4, 10, 12]; //4
let arr2 = [2, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]; //3

// function highestRank(arr) {
// 	let occurencesObj = { ...arr };

// 	return occurencesObj;
// }

function highestRank(arr) {
	let result = [0, 1]; //first is value, second is occurences
	arr.sort((a, b) => a - b);

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === arr[i + 1]) {
			result[0] = arr[i];
		}
	}
	return result[0];
}

function highestRank2(arr) {
	let result = {};
	for (let num of arr) {
		if (result[num] > 0) {
			result[num]++;
		} else {
			result[num] = 1;
		}
	}
	let sortedObjArr = Object.entries(result).sort((a, b) => a[1] - b[1]);
	return parseInt(sortedObjArr[sortedObjArr.length - 1][0]);
}

console.log(highestRank2(arr2));

//okay so one of the highest best practices one used another for loop, but that's esentially what I did with the sorting of the object via the entries array method
//Though it looks like using the sort thing on that fucks it up unless you use the .localeCompare thing??

//Object.keys() basically turns an object's keys into an array, we're looking to do the opposite
//This may be a weird way to do it? I could also sort the array and add little
//maybe a for in loop will work?
//turned out to be a for of loop
//Could maybe try using a Set as it has only unique values
