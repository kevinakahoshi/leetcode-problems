/**
 * @param {number[]} nums
 * @return {number}
 */
const countDistinctIntegers = (nums) => {
  const tracker = new Set();

  nums.forEach((num) => {
    tracker.add(num);
    let reverse = '';

    num
      .toString()
      .split('')
      .reverse()
      .forEach((char) => (reverse += char));

    tracker.add(Number(reverse));
  });

  return tracker.size;
};

module.exports = {
  countDistinctIntegers,
};
