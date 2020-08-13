const jim = { a: 1, b: 2, c: { c: 5 } };
const bim = { b: 4, c: { c: 8 } };

immutableObjectConstructor = (obj, addition) => {
	////Shallow copies
	// let copy = Object.assign({}, obj);
	let copy = { ...obj };

	///Deep copy
	let deepCopy = JSON.parse(JSON.stringify(obj));

	Object.assign(deepCopy, addition);
	return deepCopy;
};
// console.log(immutableObjectConstructor(jim, bim));
// jim.a = 4;
// console.log(jim);

const items = [
	{ name: 'ball', points: 2 },
	{ name: 'coin', points: 3 },
	{ name: 'candy', points: 4 }
];
// ^^^ Don't change ^^^
let itemPoints = items.map((item) => item.points);
const result = items
	.map((item) => item.points)
	.reduce(
		/* ==vvv Replace this code vvv== */
		(a, b) => a + b
		/* ==^^^ Replace this code ^^^== */
	);

// console.log(result);

const users = [
	{ name: 'Amir', loginCount: 5 },
	{ name: 'Betty', loginCount: 16 }
];
function loginCount(user) {
	let result = {};
	for (const n of users) {
		result = { n: n + 1 };
	}
	return result;
}

console.log(loginCount(users[0]));
// loginCount(users[1]),

//Object.assign only makes shallow copies,oh okay
// the next layer references the original object always

//ooh okay so the spread operator is doing the same thing as the object.assign above it ,but both still reference the
//mutable first object

//Object.freeze will make the first layer of the object immutable

//A Trie (TREE) is an immutable data structure
