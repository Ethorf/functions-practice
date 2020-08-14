//return the number that occurs the most times in the array
// seems like this may be a good case to map something to an object
// this also seems like a fairly similiar strain of problem as many others

// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

let arr1 = [12, 10, 8, 12, 7, 6, 4, 10, 12];

function highestRank(arr) {
	let occurencesObj = { ...arr };

	return occurencesObj;
}

console.log(highestRank(arr1));
