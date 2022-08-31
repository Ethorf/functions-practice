const validParens = (str) => {
  // ** str will be parens only
  // 1. Loop through and check for starting paren
  // 2. If found, loop through starting after paren's index & check for closing paren
  // 3. If found remove those indexes from the str and continue
  // 4. If not found, set valid to false and return
  // 5. if finding single closing paren set valid to false and return
  // ** Hmm could try doing this while there are still elements in the array??

  let strArr = str.split('');
  let valid = true;
  const parens = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  const parenArr = ['(', '[', '{'];
  const closingParenArr = ['}', '[', '{'];

  for (let i = 0; i < strArr.length; i++) {
    console.log('str[i] is');
    console.log(strArr[i]);
    if (closingParenArr.includes(strArr[i])) {
      return (valid = false);
    } else if (parenArr.includes(strArr[i])) {
      for (let j = i + 1; j < strArr.length; j++) {
        if (strArr[j] === parens[strArr[i]]) {
          strArr.splice(j, 1);
          strArr.splice(i, 1);
          console.log(strArr);
          valid = true;
        }
      }
    }
  }
  return valid;
};

const test1 = '()())';
console.log(validParens(test1));
