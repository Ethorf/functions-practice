let str = 'flenta';
let array = ['Telescopes', 'Glasses', 'Eyes', 'Monocles'];
function sortByLength(arr) {
	return array.sort((a, b) => a.split().join('').length - b.split().join('').length);
}
// console.log(sortByLength(array));

//I think I was forgetting to use a return statement in my map blocks
console.log(str.length);
//oh okay so you can just directly get the length of a string, no need for extra bullshit
