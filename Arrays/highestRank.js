//return the number that occurs the most times in the array
// seems like this may be a good case to map something to an object
// this also seems like a fairly similiar strain of problem as many others

// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

let arr1 = [12, 10, 8, 12, 7, 6, 4, 10, 12];

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

console.log(highestRank(arr1));

//Object.keys() basically turns an object's keys into an array, we're looking to do the opposite
//This may be a weird way to do it? I could also sort the array and add little
//maybe a for in loop will work?
//Could maybe try using a Set as it has only unique values
