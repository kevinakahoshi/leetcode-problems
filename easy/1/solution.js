// @param {number[]} nums
// @param {number} target
// @return {number[]}

const twoSum = (nums, target) => {
  const output = {}
  for (let index = 0; index < nums.length; index++) {
    if (output[nums[index]] === undefined) {
      output[target - nums[index]] = index;
    } else {
      return [output[nums[index]], index]
    }
  }
};

export default twoSum;
