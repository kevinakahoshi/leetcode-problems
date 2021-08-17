const {
  test,
  describe,
  expect
} = require('@jest/globals');
const {
  squareRoot
} = require('./solution');

describe('Problem 69: Sqrt(x)', () => {
  test('Test 1: Truncated square root of 4', () => {
    const input = 4;
    const expectedOutput = 2;
    const lowestNum = squareRoot(input);
    expect(lowestNum).toBe(expectedOutput);
  });

  test('Test 2: Truncated square root of 8', () => {
    const input = 8;
    const expectedOutput = 2;
    const lowestNum = squareRoot(input);
    expect(lowestNum).toBe(expectedOutput);
  });

  test('Test 3: Truncated square root of 9', () => {
    const input = 9;
    const expectedOutput = 3;
    const lowestNum = squareRoot(input);
    expect(lowestNum).toBe(expectedOutput)
  });

  test('Test 4: Truncated square root of 10', () => {
    const input = 10;
    const expectedOutput = 3;
    const lowestNum = squareRoot(input);
    expect(lowestNum).toBe(expectedOutput);
  });
});
