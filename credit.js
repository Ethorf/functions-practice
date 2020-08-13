let creditcardnumber = 4076962646363656;

let thirteenDigits = 4343739353832;
let fifteenDigits = 344575956535254;
let sixteenDigits = 4076962646363656;

function validateCCN(masterCCN) {
	let cardType = '';
	//Testing Function Idea
	const secondLastDigitEquation = (ccn) => {
		let lastTwoDigits = ccn % 100;
		let secondLastDigit = (lastTwoDigits - (lastTwoDigits % 10)) / 10;
		let double = secondLastDigit * 2;

		if (secondLastDigit <= 4) {
			return double;
		} else {
			let extraDigitOne = double / double;
			let extraDigitTwo = double % 10;
			return extraDigitOne + extraDigitTwo;
		}
	};

	//Even Last Digit Sets
	let lastFourDigits = ccn % 10000;
	let lastSixDigits = ccn % 1000000;
	let lastEightDigits = ccn % 100000000;
	let lastTenDigits = ccn % 10000000000;
	let lastTwelveDigits = ccn % 1000000000000;
	let lastFourteenDigits = ccn % 100000000000000;
	//Isolated Even Digits
	let secondLastDigit = (lastTwoDigits - (lastTwoDigits % 10)) / 10;
	let fourthLastDigit = (lastFourDigits - (lastFourDigits % 1000)) / 1000;
	let sixthLastDigit = (lastSixDigits - (lastSixDigits % 100000)) / 100000;
	let eighthLastDigit = (lastEightDigits - (lastEightDigits % 10000000)) / 10000000;
	let tenthLastDigit = (lastTenDigits - (lastTenDigits % 1000000000)) / 1000000000;
	let twelfthLastDigit = (lastTwelveDigits - (lastTwelveDigits % 100000000000)) / 100000000000;
	let fourteenthLastDigit = (lastTwelveDigits - (lastTwelveDigits % 100000000000)) / 100000000000;
	//Odd Last Digit Sets
	let lastDigit = ccn % 10;
	let lastThreeDigits = ccn % 1000;
	let lastFiveDigits = ccn % 100000;
	let lastSevenDigits = ccn % 10000000;
	let lastNineDigits = ccn % 1000000000;
	let lastElevenDigits = ccn % 100000000000;
	let lastThirteenDigits = ccn % 10000000000000;
	let lastFifteenDigits = ccn % 1000000000000000;
	//Isolated Odd Digits
	let thirdLastDigit = (lastThreeDigits - (lastThreeDigits % 100)) / 100;
	let fifthLastDigit = (lastFiveDigits - (lastFiveDigits % 10000)) / 10000;
	let seventhLastDigit = (lastSevenDigits - (lastSevenDigits % 1000000)) / 1000000;
	let ninthLastDigit = (lastNineDigits - (lastNineDigits % 100000000)) / 100000000;
	let eleventhLastDigit = (lastElevenDigits - (lastElevenDigits % 10000000000)) / 10000000000;
	let thirteenthLastDigit = (lastThirteenDigits - (lastThirteenDigits % 1000000000000)) / 1000000000000;
	let fifteenthLastDigit = (lastFifteenDigits - (lastFifteenDigits % 100000000000000)) / 100000000000000;

	//checking to see if ccn has 13 digits i.e. is a visa
	if (ccn > 999999999999 && ccn <= 9999999999999) {
		let valid = false;

		let firstDigit = (ccn - (ccn % 1000000000000)) / 1000000000000;

		let thirteenDigitEvenCheckSum =
			secondLastDigit * 2 +
			fourthLastDigit * 2 +
			sixthLastDigit * 2 +
			eighthLastDigit * 2 +
			tenthLastDigit * 2 +
			twelfthLastDigit * 2;
		let thirteenDigitOddCheckSum =
			lastDigit +
			thirdLastDigit +
			fifthLastDigit +
			seventhLastDigit +
			ninthLastDigit +
			eleventhLastDigit +
			firstDigit;
		if (firstDigit === 4) {
			cardType = 'VISA';
		} else {
			cardType = 'INVALID';
		}
		return cardType;
	}

	//checking to see if ccn has 15 digits
	else if (ccn > 99999999999999 && ccn <= 999999999999999) {
		let firstDigit = (ccn - (ccn % 100000000000000)) / 100000000000000;
		let firstTwoDigits = (ccn - (ccn % 10000000000000)) / 10000000000000;
		if (firstTwoDigits === 34 || firstTwoDigits === 37) {
			cardType = 'AMEX';
		} else {
			cardType = 'INVALID';
		}
		return cardType;
	}

	//checking to see if ccn has 16 digits
	else if (ccn > 999999999999999 && ccn <= 9999999999999999) {
		let firstDigit = (ccn - (ccn % 1000000000000000)) / 1000000000000000;
		let firstTwoDigits = (ccn - (ccn % 100000000000000)) / 100000000000000;
		if (firstTwoDigits >= 51 && firstTwoDigits <= 55) {
			cardType = 'MASTERCARD';
		} else if (firstDigit === 4) {
			cardType = 'VISA';
		} else {
			cardType = 'INVALID';
		}
		return cardType;
	}
}

// hmm, no i guess you can't loop through this with a for loop because we don't know about array's yet
// maybe you could check about the *thlast digit before you even double it and use that kind of calculation to tell if it needs to be doubles

// 5 X 2 = 10 and we want 1 and 0
//
// function doubleDigit(num) {
// 	if (double > 4) {
//         let double = num * 2;
//         let extraDigitOne = double / double;
//         let extraDigitTwo = double % 10;

// 	}
// }
console.log(16 % 10);
