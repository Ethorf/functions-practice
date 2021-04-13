const smallerThanCurrent = (nums) => {
	const resultArr = nums.map((num) => (num = 0));
	nums.map((item, index) => {
		nums.map((item2, index2) => {
			if (index2 !== index && item2 < item) {
				resultArr[index]++;
			}
		});
	});
	return resultArr;
};

const nums1 = [8, 1, 2, 2, 3];
const nums2 = [6, 5, 4, 8];
const nums2 = [6, 5, 4, 8];

console.log(smallerThanCurrent(nums2));

// I liked this sorting solution a lot
// const sorted = [...nums].sort((a, b) => a - b);

// return nums.map((value) => sorted.indexOf(value));
