const countdown = (num) => {
	if (num <= 0) {
		console.log('it has been esketted');
		return;
	}
	console.log(num);
	num--;
	countdown(num);
};

console.log(countdown(15));
