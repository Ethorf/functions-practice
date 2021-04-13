// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"

// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"

let add1 = '255.100.50.0';
let add2 = '1.1.1.1';
const dot = /\./g;

var defangIPaddr = function (address) {
	return address.replace(/\./g, '[.]');
};

console.log(defangIPaddr(add2));
