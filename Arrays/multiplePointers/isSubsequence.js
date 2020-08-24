//Okay so I misread this question, sing when targeting sting returns true so they
//can all be there with a different letter in there
const isSubsequence = (target, str) => {
	for (let i = 0; i < str.length - target.length; i++) {
		if (str.slice(i, target.length) === target) {
			return true;
		}
	}
	return false;
};

const isSubsequence2 = (target, str) => {
	let targetArr = target.split('');
	let j = 0;

	for (let i = 0; i < str.length - 1; i++) {
		if (targetArr[j] === str[i]) {
			j++;
		}
		if (j === target.length - 1) {
			return true;
		}
	}
	return false;
};

//online solution, pretty much the same as mine, except he used a while loop, and i use a for
// and he declared both iterative variables outside of the initial declaration
//seemed p close to me, don't forget that a while loop is an option
//but it's still a loop so complexity wise it's the same
//thought it may be a litlte easier to conceptualize?
function isSubsequence3(target, str) {
	var i = 0;
	var j = 0;
	if (!target) return true;
	while (j < str.length) {
		if (str[j] === target[i]) i++;
		if (i === target.length) return true;
		j++;
	}
	return false;
}

// console.log(isSubsequence2('hello', 'hlello'));
console.log(isSubsequence2('abc', 'acb'));
