/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const sortColors = (nums) => {
  const numsCopy = [...nums];
  for (let outer = 0; outer < numsCopy.length; outer++) {
    for (let inner = outer + 1; inner < numsCopy.length; inner++) {
      if (numsCopy[inner] < numsCopy[outer]) {
        const temp = numsCopy[inner];
        numsCopy[inner] = numsCopy[outer];
        numsCopy[outer] = temp;
      }
    }
  }
  return numsCopy;
}

module.exports = {
  sortColors
};
