// @param {number[]} nums
// @param {number}

const dominantIndex = nums => {
    const largest = Math.max(...nums);
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] > largest / 2 && nums[index] !== largest) return -1;
    }
    return nums.indexOf(largest);
};

export default dominantIndex;
