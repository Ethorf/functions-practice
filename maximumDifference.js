let arr1 = [1, 10, 15, 4, 3];
let arr2 = [15, 10, 15, 4, 45];

const maximumDifference = (arr) => {
	let sortArr = arr.sort((a, b) => a - b);
	return sortArr[sortArr.length - 1] - sortArr[0];
};

console.log(maximumDifference(arr2));

//member that sort you can just arrow func and don't need the callback { } or it doesnt work
