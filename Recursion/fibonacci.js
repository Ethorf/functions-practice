// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465
//This function will return the nth number in the sequence

const fibonacci = (sequenceNum) => {
	let sum = 1;
	if (sequenceNum === 0) return sum;
	sum = sum + sum;
	console.log(`sum is currently:${sum}`);
	return sum + fibonacci(sequenceNum - 1);
};

//fib we will decrease

function fibonacci2(n) {
	if (n <= 2) return 1;
	// console.log(`n is currently:${n}`);
	return fibonacci2(n - 1) + fibonacci2(n - 2);
}
console.log(fibonacci2(10));

/// so for 10, we start out returning two recursions, this shit is blowing my mind
//Thinking about recursion from the bottom up is apparently v helpful??

//But where does this stuff return? what is the actual process here??
//okay so these break out into little double chunks of themselves, each single branch spawns 2 more
//The return has an implicit summing function which kind of starts
