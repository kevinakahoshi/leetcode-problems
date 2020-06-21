// @param {number []} nums
// @return {number []}

const runningSum = nums => {
  const output = [];
  let sum = 0;
  for (let index = 0; index < nums.length; index++) {
    sum += nums[index];
    output.push(sum);
  }
  return output;
};

export default runningSum;
