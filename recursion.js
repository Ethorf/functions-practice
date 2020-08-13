function countUp(num, max) {
	if (num > max) return;
	console.log(num);
	countUp(num + 1, max);
}
// countUp(1,5)

//this below lets me know that you can have two returns, but i guess that first one is wrapped in an if

// this function runs in reverse basically
function fibby(count) {
	// console.log('fibby(' + count);
	if (count === 1) return [0, 1];
	var arr = fibby(count - 1);
	var sum = arr[arr.length - 1] + arr[arr.length - 2];
	arr.push(sum);
	console.log(arr);

	return arr;
}

fibby(8);
