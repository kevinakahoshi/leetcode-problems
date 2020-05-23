// @param {number[]} nums
// @param {number} k

const rotate = (nums, k) => {
    let numsCopy = nums.map(element => element);
    const elements = numsCopy.splice(nums.length - k, k);
    numsCopy.unshift(...elements);
    return numsCopy.toString();
};

export default rotate;
