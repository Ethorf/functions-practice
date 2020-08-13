// Input:
let numsArr1 = [1, 2, 3, 0, 0, 0],
	m = 3;
let numsArr2 = [2, 5, 6],
	n = 3;

let numsArr3 = [0]; //m = 0
let numsArr4 = [1]; // n = 1 , should return

// Output: [1,2,2,3,5,6]

// This works in node but not on Leetcode
var merge = function (nums1, m, nums2, n) {
	for (let i = 0; i < m; i++) {
		nums1.pop();
	}
	return nums1.concat(nums2).sort((a, b) => a - b);
};
//.concat( ) returns a copy and doesn't change the array in place
var merge2 = function (nums1, m, nums2, n) {
	if (n === 0) {
		return nums1;
	} else if (nums1[0] === 0 && nums1.length === 1) {
		nums1.pop();
	} else {
		for (let i = 0; i < n; i++) {
			nums1.pop();
		}
	}
	for (let i = 0; i < n; i++) {
		nums1.push(nums2[i]);
	}

	return nums1.sort((a, b) => a - b);
};
console.log(merge2(numsArr3, 0, numsArr4, 1));

//holy shit this one got really messy with the edge cases, not sure how I could really really improve this but it just felt like it really kinda fell apart after a while there
