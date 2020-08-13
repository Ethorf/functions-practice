let arr = [1, 2, 3, 7];
let arr2 = [2, 7, 11, 15];
var twoSum = function (nums, target) {
	let correctArr = [];
	for (let i = 0; i < nums.length; i++) {
		for (let j = 0; j < nums.length; j++) {
			console.log(`${nums[i]} + ${nums[j]} = ${nums[i] + nums[j]}`);
			if (nums[i] + nums[j] === target) {
				correctArr[1] = i;
				correctArr[0] = j;
			}
		}
	}
	return correctArr;
};

console.log(twoSum(arr2, 9));

////Ideas
//the question seemed to indicate that the INDICES would add up to the target but that is not the case
// doing two nested for loop through each but breaking out if it works
//one of them will be checking each element of the array, and the other will be checking every other element if it can be multiplied to
// This feels like it could be refactored to not check
