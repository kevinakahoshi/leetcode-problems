const {
  shuffle
} = require('./solution');
const {
  describe,
  expect,
  test
} = require('@jest/globals');

describe('Problem 1470: Shuffle the Array', () => {
  test('Test 1: [2, 5, 1, 3, 4, 7] | 3', () => {
    const nums = [2, 5, 1, 3, 4, 7];
    const n = 3;
    const expected = [2, 3, 5, 4, 1, 7];
    const output = shuffle(nums, n);
    expect(output).toMatchObject(expected);
  });

  test('Test 2: [1, 2, 3, 4, 4, 3, 2, 1] | 4', () => {
    const nums = [1, 2, 3, 4, 4, 3, 2, 1];
    const n = 4;
    const expected = [1, 4, 2, 3, 3, 2, 4, 1];
    const output = shuffle(nums, n);
    expect(output).toMatchObject(expected);
  });

  test('Test 3: [1, 1, 2, 2] | 2', () => {
    const nums = [1, 1, 2, 2];
    const n = 2;
    const expected = [1, 2, 1, 2];
    const output = shuffle(nums, n);
    expect(output).toMatchObject(expected);
  });

  test('Test 4: [1, 3, 5, 7, 9, 11, 13] | 1', () => {
    const nums = [1, 3, 5, 7, 9, 11, 13];
    const n = 1;
    const expected = [1, 3, 3, 5, 5, 7, 7, 9, 9, 11, 11, 13];
    const output = shuffle(nums, n);
    expect(output).toMatchObject(expected);
  });
});
