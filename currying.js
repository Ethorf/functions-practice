var add = function (x) {
	return function (y) {
		return x + y + y;
	};
};

// var addTen = add(10);

// addTen(2);
// okay so increment refernces the 'add' function, supplying a specific argument to it's variable definition.
// the add argument is passed 1 (as x) and the y is the argument supplied to increment
// in this sense currying works inside to out, right to left
// it also feels like when you are assigning a variable to a function that returns a function,
// you are assigning the argument it takes to the returned function, not the inital function
// oooh okay so you can only assign a variable to a function if that function returns a function, otherwise the definition errors out
//you are assigning to the return value
let increment = add(1);

console.log(increment(10));
