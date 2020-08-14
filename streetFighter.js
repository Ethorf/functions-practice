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
//remember that only the fighters array is 2d

let moves1 = ['up', 'left', 'right', 'left', 'left'];
let moves2 = ['down', 'left', 'right', 'left', 'left'];

//this should return ['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog'] (Moves1 that is)

const streetFighter = (fighters, position, moves) => {
	let resultArray = [];
	let mutablePosition = position;

	//since this will have a lot of if elses I could use a switch case upon refactor?
	//another refactor could be to map everything to an object to it's easier to read i.e. instead of 1 or zero
	``;
	for (let i = 0; i < moves.length; i++) {
		if (moves[i] === 'up' && mutablePosition[0] === 0) {
			resultArray.push(fighters[0][mutablePosition[1]]);
		} else if (moves[i] === 'up' && mutablePosition[0] === 1) {
			//The mutable position[1] is basically binary values so we don't have to mutate the position array before pushing the value because we allready know what that will be
			resultArray.push(fighters[0][mutablePosition[1]]);
			mutablePosition[0]--;
			//THe downs are the same except for the changing of the mutablePosition array
		} else if (moves[i] === 'down' && mutablePosition[0] === 1) {
			resultArray.push(fighters[1][mutablePosition[1]]);
		} else if (moves[i] === 'down' && mutablePosition[0] === 0) {
			resultArray.push(fighters[1][mutablePosition[1]]);
			mutablePosition[0]++;
		}
		//The Lefts // starting with the Scroll Horizontal to the left which is the "mutablePosition1"
		else if (moves[i] === 'left' && mutablePosition[1] === 0) {
			//Here we have to change the position first to account for unknown lengths of fighters (not sure if we can assume it's always the same)
			mutablePosition[1] = fighters[0].length - 1;
			resultArray.push(fighters[mutablePosition[0]][mutablePosition[1]]);
		} else if (moves[i] === 'left' && mutablePosition[1] !== 0) {
			mutablePosition[1]--;
			resultArray.push(fighters[mutablePosition[0]][mutablePosition[1]]);
			//Below are the RIGHTS
		} else if (moves[i] === 'right' && mutablePosition[1] === fighters[0].length - 1) {
			mutablePosition[1] = 0;
			resultArray.push(fighters[mutablePosition[0]][mutablePosition[1]]);
		} else if (moves[i] === 'right' && fighters[0].length - 1) {
			mutablePosition[1]++;
			resultArray.push(fighters[mutablePosition[0]][mutablePosition[1]]);
		}
	}

	return resultArray;
};

console.log(streetFighter(fighters1, [0, 0], moves1));

//Below is a much cleaner solution, accounting for the fact that every single time you push the same thing
//I guess a good practice when writing these things would be to see when I am repeating myself, DRY dude.
//also think about how you could use ternarys to compensate for nested conditionals when you are checking for multiple stages of things,
//I guess I never thought about nesting ternaries as a practice for nested conditions and DRY practice
//also my 'mutable position' was totally unecessary as you can totally mutate the parameters passed to a function, good to know

// function streetFighterSelection(fighters, position, moves){
//   var result = [];

//   moves.forEach(function(move) {
//     if (move === "up") {
//       position[0] = 0;
//     }
//     else if (move === "down") {
//       position[0] = 1;
//     }
//     else if (move === "right") {
//       position[1] = (position[1] === 5) ? 0 : position[1] + 1;
//     }
//     else if (move === "left") {
//       position[1] = (position[1] === 0) ? 5 : position[1] - 1;
//     }

//     result.push(fighters[position[0]][position[1]]);
//   });

//   return result;
// }
