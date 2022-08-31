var removeElement = function (nums, val) {
  let k = 0;
  //   This has the same problem with the remove indexes moving the loop forward
  // Could you store the removal indexes for later?
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
      k++;
    }
  }

  return nums;
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
