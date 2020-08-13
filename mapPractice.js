// maps must be initialized this way
//maps must use map.get(key) to retrieve their values
//maps also use map.set
let map = new Map([
	[1, 'Sam'],
	[2, 'John']
]);
map.set(3, 'jeff');
map.set(['flenter'], 'jeffronzioa');

console.log(map);
