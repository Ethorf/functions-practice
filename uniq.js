arr1 = [1, 2, 1, 1, 1, 1];

function uniq(arr) {
	let returnArr = [];

	arr.forEach((item, index) => {
		if (arr.includes(item, index + 1)) {
		} else {
			returnArr.push(item);
		}
	});
	return returnArr;
}

console.log(typeof []);

//Here I learned that you can just leave an if code block empty if you want it to do nothing. It seems like it would be really cool to check the negative of a whole block, and more efficient
// but I guess you can just do that you want in the else there
