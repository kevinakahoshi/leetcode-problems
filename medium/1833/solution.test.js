const {
  describe,
  expect,
  test
} = require('@jest/globals');
const {
  maxIceCream
} = require("./solution");

describe('Problem 1833: Maximum Ice Cream Bars', () => {
  test('Test 1: [1, 3, 2, 4, 1] | 7', () => {
    const costs = [1, 3, 2, 4, 1];
    const coins = 7;
    const expected = 4;
    const output = maxIceCream(costs, coins);
    expect(output).toBe(expected);
  });

  test('Test 2: [10, 6, 8, 7, 7, 8] | 5', () => {
    const costs = [10, 6, 8, 7, 7, 8];
    const coins = 5;
    const expected = 0;
    const output = maxIceCream(costs, coins);
    expect(output).toBe(expected);
  });

  test('Test 3: [1, 6, 3, 1, 2, 5] | 20', () => {
    const costs = [1, 6, 3, 1, 2, 5];
    const coins = 20;
    const expected = 6;
    const output = maxIceCream(costs, coins);
    expect(output).toBe(expected);
  });
});
