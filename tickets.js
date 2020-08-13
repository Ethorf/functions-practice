function tickets(peopleInLine) {
	let totalTicketsNeeded = peopleInLine.length;

	let total = peopleInLine.reduce((accumulator, currentValue) => accumulator + currentValue);
	return totalTicketsNeeded;
}

console.log(tickets([3, 4, 6, 9]));

//ticket costs $25
//starts with no change
//tickets([25, 25, 50]) // => YES ---- because 3 people need tickets, the third one with
// tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
// tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)
