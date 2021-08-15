/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  const numberValues = {};

  nums.forEach((num) => {
    if (num in numberValues) {
      numberValues[num] = true;
    } else {
      numberValues[num] = false;
    }
  });

  return Object.keys(numberValues)
    .filter((num) => numberValues[num])
    .map((num) => parseInt(num));
};

module.exports = {
  findDuplicates
}
