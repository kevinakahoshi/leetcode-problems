const {
  describe,
  expect,
  test
} = require('@jest/globals');
const {
  sortColors
} = require('./solution');

describe('Problem 75: Sort Colors', () => {
  test('Test 1 (6 Elements)', () => {
    const input = [2, 0, 2, 1, 1, 0];
    const output = sortColors(input);
    const expected = [0, 0, 1, 1, 2, 2];
    expect(output).toMatchObject(expected);
  });

  test('Test 2 (3 Elements)', () => {
    const input = [2, 0, 1];
    const output = sortColors(input);
    const expected = [0, 1, 2];
    expect(output).toMatchObject(expected);
  });

  test('Test 3 (1 Elements)', () => {
    const input = [0];
    const output = sortColors(input);
    const expected = [0];
    expect(output).toMatchObject(expected);
  });

  test('Test 4 (1 Elements)', () => {
    const input = [1];
    const expected = [1];
    const output = sortColors(input);
    expect(output).toMatchObject(expected);
  });

  test('Test 5 (10 Elements)', () => {
    const input = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    const output = sortColors(input);
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(output).toMatchObject(expected);
  });

  test('Test 6 (15 Elements)', () => {
    const input = [2, 5, 1, 8, 55, 2, 9, 6, 10, 23, 6, 5, 34, 4, 67];
    const output = sortColors(input);
    const expected = [1, 2, 2, 4, 5, 5, 6, 6, 8, 9, 10, 23, 34, 55, 67];
    expect(output).toMatchObject(expected);
  });
});
