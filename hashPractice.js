var a = new Array(); // or just []
a[0] = 0;
a['one'] = 1;
a['two'] = 2;
a['three'] = 3;

for (let k in a) {
	if (a.hasOwnProperty(k)) {
		console.log('key is: ' + k + ', value is: ' + a[k]);
	}
}
console.log(a.length);

//.hasOwnProperty() is used to check if the referenced object has the indicated property
//for in loops keys in an object
