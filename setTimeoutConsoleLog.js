//Original problem
for (var i = 1; i < 5; i++) {
	setTimeout(() => console.log(i), 1000);
}
//Solution 2
for (let i = 1; i < 5; i++) {
	setTimeout(() => console.log(i), 1000);
}
////Solution 1
// for (var i = 1; i < 5; i++) {
// 	// this immediately invoked function expression changes the scope
// 	// of the i variable in the console.log
// 	((i) => {
// 		setTimeout(() => console.log(i), 1000);
// 	})(i);
// }

//utilizing an IIFE could ameliorate the scope of our i var
//but actually just changing var to let would fix this, because var is function scoped and let is block scoped

//both let and const are block scoped rather than function scoped { } ==  a block, i.e "var"s declared inside a function are still accessible outside that function
