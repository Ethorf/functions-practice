const triplet1 = [1, 3, 5];

const triplet4 = [2, 1, 6];
const triplets2 = [
	[4, 5, 5],
	[2, 3, 6]
];
const triplets3 = [
	[1, 0, 2],
	[2, 3, 4]
];

let triplet5 = [17, 28, 30];
let triplet6 = [99, 16, 8];

const compareTriplets = (trip1, trip2) => {
	let scoreA = 0;
	let scoreB = 0;
	for (let i = 0; i < trip1.length; i++) {
		if (trip1[i] > trip2[i]) {
			scoreA++;
		} else if (trip2[i] > trip1[i]) {
			scoreB++;
		}
	}
	return [scoreA, scoreB];
};

console.log(compareTriplets(triplet5, triplet6));
