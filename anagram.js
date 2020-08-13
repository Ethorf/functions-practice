const anagram = (str1, str2) => {
	if (str1.length !== str2.length) {
		return false;
	}
	return str1.split('').sort().join('') === str2.split('').sort().join('');
};

//this one works really well with sorting
// this would also work for pangram but just checking against abc.. etc
console.log(anagram('troo', 'root'));
