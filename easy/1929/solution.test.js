const {
  describe,
  expect,
  test
} = require('@jest/globals');
const {
  getConcatenation
} = require("./solution");

describe('Problem 1929: Concatenation of Array', () => {
  test('Test 1: [1, 2, 1]', () => {
    const nums = [1, 2, 1];
    const expected = [1, 2, 1, 1, 2, 1];
    const output = getConcatenation(nums);
    expect(output).toMatchObject(expected);
  });

  test('Test 2: [1, 3, 2, 1]', () => {
    const nums = [1, 3, 2, 1];
    const expected = [1, 3, 2, 1, 1, 3, 2, 1];
    const output = getConcatenation(nums);
    expect(output).toMatchObject(expected);
  });

  test('Test 3: [1]', () => {
    const nums = [1];
    const expected = [1, 1];
    const output = getConcatenation(nums);
    expect(output).toMatchObject(expected);
  });

  test('Test 4: []', () => {
    const nums = [];
    const expected = [];
    const output = getConcatenation(nums);
    expect(output).toMatchObject(expected);
  });

  test('Test 5: [9, 8, 7, 6, 5, 4, 3, 2, 1]', () => {
    const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];
    const expected = [9, 8, 7, 6, 5, 4, 3, 2, 1, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    const output = getConcatenation(nums);
    expect(output).toMatchObject(expected);
  })
});
