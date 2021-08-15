const {
  describe,
  expect,
  test
} = require('@jest/globals');
const {
  findDuplicates
} = require("./solution");

describe('Problem 442: Find All Duplicates in an Array', () => {
  test('Test 1: [4, 3, 2, 7, 8, 2, 3, 1]', () => {
    const nums = [4, 3, 2, 7, 8, 2, 3, 1];
    const expected = [2, 3];
    const output = findDuplicates(nums);
    expect(output).toMatchObject(expected);
  });

  test('Test 2: [1, 1, 2]', () => {
    const nums = [1, 1, 2];
    const expected = [1];
    const output = findDuplicates(nums);
    expect(output).toMatchObject(expected);
  });

  test('Test 3: [1]', () => {
    const nums = [1];
    const expected = [];
    const output = findDuplicates(nums);
    expect(output).toMatchObject(expected);
  });

  test('Test 4: [1, 2, 3, 4, 5]', () => {
    const nums = [1, 2, 3, 4, 5];
    const expected = [];
    const output = findDuplicates(nums);
    expect(output).toMatchObject(expected);
  });

  test('Test 5: [5, 4, 2, 2, 0, 8, 10, 8, 9, 5, 12, -7, 90]', () => {
    const nums = [5, 4, 2, 2, 0, 8, 10, 8, 9, 5, 12, -7, 90];
    const expected = [2, 5, 8];
    const output = findDuplicates(nums);
    expect(output).toMatchObject(expected);
  })
});
