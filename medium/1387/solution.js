/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
const calculateEvens = (x) => x / 2;

const calculateOdds = (x) => 3 * x + 1;

const runCalculations = (num, power) => {
  if (num === 1) return power;
  let next = null;

  if (num % 2 > 0) {
    next = calculateOdds(num);
  } else {
    next = calculateEvens(num);
  }

  return runCalculations(next, power + 1);
}

const getKth = (lo, hi, k) => {
  const integers = [];

  for (let index = lo; index < hi + 1; index++) {
    integers.push({
      value: index,
      power: 0
    });
  }

  const sortedByPower = integers.map(({
      value,
      power
    }) => ({
      value,
      power: runCalculations(value, power)
    }))
    .sort((p1, p2) => p1.power === p2.power ? p1.value - p2.value : p1.power - p2.power);

  return sortedByPower[k - 1].value;
};

module.exports = {
  getKth
}
