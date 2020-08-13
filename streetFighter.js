//Given a list of fighters (an array of 2 arrays), a starting position (i.e. [0,0])
//and a list of moves [left,right,up, || down],
//print the fighters that are selected by these moves
//you can cycle horizontally but not vertically

let fighters1 = [
	['Ryu', 'E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega'],
	['Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat', 'M.Bison']
];
let position1 = [0, 0];
let position2 = [1, 1];
//Positions are [vertical,horizontal]

let moves1 = ['up', 'left', 'right', 'left', 'left'];
let moves2 = ['down', 'left', 'right', 'left', 'left'];

//this should return ['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog'] (Moves1 that is)
const streetFighter = (fighters, position, moves) => {
	let resultArray = [];
	let mutablePosition = position;

	//since this will have a lot of if elses I could use a switch case upon refactor?

	for (let i = 0; i < moves.length; i++) {
		if (moves[i] === 'up' && mutablePosition[0] === 0) {
			resultArray.push(fighters[0][mutablePosition[1]]);
		} else if (moves[i] === 'up' && mutablePosition[0] === 1) {
			resultArray.push(fighters[0][mutablePosition[1]]);
			mutablePosition[0]--;
			//THe downs are the same except for the changing of the mutablePosition array
		} else if (moves[i] === 'down' && mutablePosition[0] === 1) {
			resultArray.push(fighters[1][mutablePosition[1]]);
		} else if (moves[i] === 'down' && mutablePosition[0] === 0) {
			resultArray.push(fighters[1][mutablePosition[1]]);
			mutablePosition[0]++;
		}
		//The Lefts // starting with the Scroll Horizontal
		else if (moves[i] === 'left' && mutablePosition[1] === 0) {
			resultArray.push(fighters[mutablePosition[0]][mutablePosition[1]]);
		} else if (moves[i] === 'down' && mutablePosition[0] === 0) {
			resultArray.push(fighters[1][mutablePosition[1]]);
			mutablePosition[0]++;
		}
	}

	return resultArray;
	// return mutablePosition;
};

console.log(streetFighter(fighters1, [0, 2], moves2));
