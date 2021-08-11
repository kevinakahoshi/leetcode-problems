/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
const maxIceCream = (costs, coins) => {
  const sortedCosts = costs.sort((cost1, cost2) => cost1 - cost2);
  let total = 0;

  sortedCosts.forEach((cost) => {
    if (cost <= coins) {
      total += 1;
      coins -= cost;
    }
  });

  return total;
};

module.exports = {
  maxIceCream
}
