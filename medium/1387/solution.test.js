const {
  describe,
  expect,
  test
} = require('@jest/globals');
const {
  getKth
} = require("./solution");

describe('Problem 1387: Sort Integers by The Power Value', () => {
  test('Test 1: [12, 15, 2]', () => {
    const low = 12;
    const high = 15;
    const k = 2;
    const expected = 13;
    const output = getKth(low, high, k);
    expect(output).toBe(expected);
  });

  test('Test 2: [1, 1, 1]', () => {
    const low = 1;
    const high = 1;
    const k = 1;
    const expected = 1;
    const output = getKth(low, high, k);
    expect(output).toBe(expected);
  });

  test('Test 3: [7, 11, 4]', () => {
    const low = 7;
    const high = 11;
    const k = 4;
    const expected = 7;
    const output = getKth(low, high, k);
    expect(output).toBe(expected);
  });

  test('Test 4: [10, 20, 5]', () => {
    const low = 10;
    const high = 20;
    const k = 5;
    const expected = 13;
    const output = getKth(low, high, k);
    expect(output).toBe(expected);
  });

  test('Test 5: [1, 1000, 777]', () => {
    const low = 1;
    const high = 1000;
    const k = 777;
    const expected = 570;
    const output = getKth(low, high, k);
    expect(output).toBe(expected);
  });
});
