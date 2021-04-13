const jewelsAndStones = (jewels, stones) => {
	let jewelCount = 0;
	let stonesArr = stones.split('');
	let jewelsArr = jewels.split('');

	stonesArr.map((stone) => {
		if (jewelsArr.includes(stone)) {
			jewelCount++;
		}
	});
	return jewelCount;
};

let stones1 = 'aAAbbbb';
let stones2 = 'ZZ';
let jewels1 = 'aA';
let jewels2 = 'z';

console.log(jewelsAndStones(jewels2, stones2));
