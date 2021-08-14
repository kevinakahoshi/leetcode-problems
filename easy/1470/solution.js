/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
const shuffle = (nums, n) => {
  const output = [];
  for (let start = 0, end = n; end < nums.length; start++, end++) {
    output.push(nums[start]);
    output.push(nums[end]);
  }
  return output;
};

module.exports = {
  shuffle
}
