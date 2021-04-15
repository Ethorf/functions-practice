const decodeXOR = (encoded, first) => {};

//arr is the array we're trying to find
// encoded = [1,2,3], first = 1
// output = [1,0,2,1]
// encoded[i] = arr[i] XOR arr[i + 1]

//Input array will be one element shorter than output,
//XOR outputs a 1 when the two compared elements don't match.
// 0 XOR 0 = 0
// 0 XOR 1 = 1
// 1 XOR 0 = 1
// 1 XOR 1 = 0

console.log(0 ^ 2);
