const {
  test,
  describe,
  expect
} = require('@jest/globals');
const {
  findMin
} = require('./solution');

describe('Problam 153: Find Lowest Number in Sorted Array Shifted `n` Times', () => {
  test('Test 1: All numbers are the same', () => {
    const nums = [1, 1, 1, 1, 1, 1, 1];
    const expectedOutput = 1;
    const lowestNum = findMin(nums);
    expect(lowestNum).toBe(expectedOutput);
  });

  test('Test 2: Numbers are already in order', () => {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const expectedOutput = 1;
    const lowestNum = findMin(nums);
    expect(lowestNum).toBe(expectedOutput);
  });

  test('Test 3: Numbers shifted `n` times', () => {
    const nums = [5, 6, 7, 8, 9, 10, 1, 2, 3, 4];
    const expectedOutput = 1;
    const lowestNum = findMin(nums);
    expect(lowestNum).toBe(expectedOutput)
  });

  test('Test 4: Numbers are all negative and sorted in ascending order', () => {
    const nums = [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1];
    const expectedOutput = -10;
    const lowestNum = findMin(nums);
    expect(lowestNum).toBe(expectedOutput);
  });

  test('Test 5: Numbers are all negative and shifted `n` times', () => {
    const nums = [-5, -4, -3, -2, -1, -10, -9, -8, -7, -6];
    const expectedOutput = -10;
    const lowestNum = findMin(nums);
    expect(lowestNum).toBe(expectedOutput);
  });

  test('Test 6: Both positive and negative numbers are present', () => {
    const nums = [-2, -1, 0, 1, 2, 3, -4, -3];
    const expectedOutput = -4;
    const lowestNum = findMin(nums);
    expect(lowestNum).toBe(expectedOutput);
  })

  test('Test 7: Works with floating point numbers', () => {
    const nums = [5.2, 6.5, 7.1, 8.0, 1.1, 1.2, 1.3];
    const expectedOutput = 1.1;
    const lowestNum = findMin(nums);
    expect(lowestNum).toBe(expectedOutput);
  });

  test('Test 8: Works with positive, negative, and floating point numbers', () => {
    const nums = [-5, -4, -3.2, -2, 0, 4, 10, 12.4, -11, -8, -5.1];
    const expectedOutput = -11;
    const lowestNum = findMin(nums);
    expect(lowestNum).toBe(expectedOutput);
  });

  test('Test 9: Works efficiently with large inputs that are shifted `n` times', () => {
    const elements = 100000;
    const nums = new Array(elements).fill(null).map((_, index) => index + 1);

    let shiftNumber = Math.floor(Math.random() * elements + 1);
    while (shiftNumber) {
      nums.push(nums.shift());
      shiftNumber--;
    }

    const expectedOutput = 1;
    const lowestNum = findMin(nums);
    expect(lowestNum).toBe(expectedOutput);
  });
});
