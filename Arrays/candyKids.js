// Example 1:

// Input: candies = [2,3,5,1,3], extraCandies = 3
// Output: [true,true,true,false,true]
// Explanation:
// Kid 1 has 2 candies and if he or she receives all extra candies (3) will have 5 candies --- the greatest number of candies among the kids.
// Kid 2 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids.
// Kid 3 has 5 candies and this is already the greatest number of candies among the kids.
// Kid 4 has 1 candy and even if he or she receives all extra candies will only have 4 candies.
// Kid 5 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids.
// Example 2:

// Output: [true,false,false,false,false]
// Explanation: There is only 1 extra candy, therefore only kid 1 will have the greatest number of candies among the kids regardless of who takes the extra candy.
// Example 3:

// Input: candies3 = [12,1,12], extraCandies3 = 10
// Output: [true,false,true]

let candies2 = [4, 2, 1, 1, 2];
let extraCandies2 = 1;

let candies3 = [12, 1, 12];
let extraCandies3 = 10;

let candies1 = [2, 3, 5, 1, 3];
let extraCandies1 = 3;

const candyKids = (arr, extra) => {
	let boolArr = [];
	let highestNum = arr
		.slice()
		.sort((a, b) => a - b)
		.reverse()[0];
	arr.map((item) => {
		if (item + extra >= highestNum) {
			console.log(`${item} + ${extra} is ${item + extra}`);
			boolArr.push(true);
		} else {
			boolArr.push(false);
		}
	});
	return boolArr;
	// return highestNum;
};

console.log(candyKids(candies1, extraCandies1));
