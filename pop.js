let array = [3, 4, 5];
let array2 = [3, 4, 5, 6];

function eql(arr1, arr2) {
	let sumbo = 0;
	arr1.forEach((item, index) => {
		if (item === arr2[index]) {
			sumbo++;
		}
	});
	if (arr1.length !== arr2.length || sumbo < arr1.length) {
		return false;
	}
	return true;
}

console.log([[1, 2], { name: 'Amir', postIds: [77, 192] }].flat(Infinity));
