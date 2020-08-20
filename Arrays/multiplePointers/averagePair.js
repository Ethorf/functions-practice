let arr1 = [1, 2, 3];
let arr2 = [1, 3, 3, 5, 6, 7, 10, 12, 19];
let arr3 = [-1, 0, 3, 4, 5, 6];
const averagePair = (arr, target) => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 1; j < arr.length; j++) {
			if (arr[i] + arr[j] / 2 === target) {
				return true;
			}
		}
	}
	return false;
};
//ookoay this was what I was looking for with the multiples moving in different directions
function averagePair2(arr, num) {
	//One pointer starts at the beginning
	let start = 0;
	//ONe starts at the end
	let end = arr.length - 1;
	while (start < end) {
		//this is just checking the avg
		let avg = (arr[start] + arr[end]) / 2;
		if (avg === num) return true;
		//ooh okay so this taking into account the fact that the lower number will need to be increased if the avg
		//is less than the target
		else if (avg < num) start++;
		//but if it's not then bring the end closer so we get close to the middle
		else end--;
	}
	return false;
}
console.log(averagePair(arr3, 4.1));
