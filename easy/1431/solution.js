// @param {number[]} candies
// @param {number} extraCandies
// @return {boolean[]}

const kidsWithCandies = (candies, extraCandies) => {
  const max = Math.max(...candies);
  return candies.map(candyNumber => candyNumber + extraCandies >= max ? true : false);
};

export default kidsWithCandies;
