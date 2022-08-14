// Collisions is kind of a difficult problem to solve
// Prime numbers are much better for non-colliding values

const basicHash = (str, length) => {
  // Though we can't decode we can expect the same output?
  let total = 0;
  for (let char of str) {
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % length;
  }
  //   This only works on strings, isn't random and is not over all good
  return total;
};
const intHash = (key, length) => {
  let total = 0;
  let wPrime = 31;
  // This is essentialyl saying only look at the first 100 characters
  //   This can obviously lead to some collisions
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * wPrime + value) % length;
  }
  //   This only works on strings, isn't random and is not over all good
  return total;
};
console.log(basicHash('fldemaabar', 100));
