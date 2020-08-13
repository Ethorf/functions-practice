function* numbers() {
	let x = 1;
	yield x;
	x += 1;
	yield x;
}
//   Array.from(numbers())
//   [1, 2]

console.log(numbers());
