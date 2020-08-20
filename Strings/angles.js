let test1 = '<<>>>>><<<>>'; //<<<<<>>>>><<<>>>
const solution = (angles) => {
	// Type your solution here
	let leftCount = 0;
	let rightCount = 0;
	let anglesArr = angles.split('');
	for (let i = 0; i < anglesArr.length; i++) {
		if (anglesArr[i] === '<') {
			leftCount++;
		}
		if (anglesArr[i] === '>') {
			rightCount++;
		}
	}
	for (let i = 0; i < rightCount - leftCount; i++) {
		anglesArr.unshift('<');
		leftCount++;
	}
	for (let i = 0; i < leftCount - rightCount; i++) {
		anglesArr.push('>');
	}

	return anglesArr.join('');
};

console.log(solution(test1));
