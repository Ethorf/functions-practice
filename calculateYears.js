function calculateYears(principal, interest, tax, desired) {
	let total = 0;
	let y = 0;
	if (principal === desired) {
		y = 0;
		return y;
	} else {
		do {
			let interestGained = principal * interest;
			total = interestGained - interestGained * tax + principal;
			principal = total;
			y++;
		} while (total < desired);
		return y;
	}
}

console.log(calculateYears(1100, 0.05, 0.18, 1100));

//maybe try a do while here?
//feels like this also might make sense to use a recursive function here
//principal changes
// okay so you can just put the  while () at the begininng , no do required
// ooooohkay yeah you can just set principal to be += principal * interest * (1-tax)
// this way it just increases the principal every time
// you don't need to keep it in a different var etc.
