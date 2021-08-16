/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let currentLowest = nums[0];
  let start = 0;
  let end = Math.floor(nums.length / 2);

  while (start !== end) {
    const startingNum = nums[start];
    const endingNum = nums[end];

    if (endingNum < startingNum) {
      currentLowest = endingNum;
      end = Math.floor((start + end) / 2);
    } else {
      start = end;
      end = nums.length - 1;
    }
  }

  return currentLowest;
};

module.exports = {
  findMin
}
