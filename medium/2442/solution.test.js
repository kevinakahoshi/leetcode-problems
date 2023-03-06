const {
  describe,
  expect,
  test
} = require("@jest/globals");
const {
  countDistinctIntegers
} = require("./solution");

describe("Problem 2442: Count Number of Distinct Integers After Reverse Operations", () => {
  test("Test 1: [1, 13, 10, 12, 31]", () => {
    const nums = [1, 13, 10, 12, 31];
    const expected = 6;
    const output = countDistinctIntegers(nums);
    expect(output).toBe(expected);
  });

  test("Test 2: [2, 2, 2]", () => {
    const nums = [2, 2, 2];
    const expected = 1;
    const output = countDistinctIntegers(nums);
    expect(output).toBe(expected);
  });
});
