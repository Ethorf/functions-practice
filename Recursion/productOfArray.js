// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

const productOfArray = (arr) => {
	if (arr.length === 0) return 1;
	return arr.shift() * productOfArray(arr);
};

console.log(productOfArray([1, 2, 3, 10]));
