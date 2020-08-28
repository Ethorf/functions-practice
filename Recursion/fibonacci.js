// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465
//This function will return the nth number in the sequence

const sumRange = (num) => {
	if (num === 1) return 1;
	return num + sumRange(num - 1);
};
