// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

const productOfArrayOrig = (arr) => {
	if (arr.length === 0) return 1;
	return arr.shift() * productOfArray(arr);
};

//okay so looks like I was close but I think conceptualizing it as something like
// arr[0] * (operation that changes what array 0 is and turns into another arr[0])

function productOfArray(arr) {
	if (arr.length === 0) {
		return 1;
	}
	return arr[0] * productOfArray(arr.slice(1));
}
console.log(productOfArray([1, 2, 3, 10]));
