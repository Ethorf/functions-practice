const factorial = (num) => {
	if (num === 1) return num;
	return num * factorial(num - 1);
};

//4! = 4 factorial which is 4 * 3 * 2 * 1
//This only really returns the final value although on first glance it would seem to me like it
//returns every time
console.log(factorial(4));
