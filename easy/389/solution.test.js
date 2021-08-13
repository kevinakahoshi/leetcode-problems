const {
  describe,
  expect,
  test
} = require('@jest/globals');
const {
  findTheDifference
} = require('./solution');

describe('Problem 389: Find the Difference', () => {
  test('Test 1: `abcd` | `abcde`', () => {
    const s = 'abcd';
    const t = 'abcde';
    const expected = 'e';
    const output = findTheDifference(s, t);
    expect(output).toBe(expected);
  });

  test('Test 2: `` | `y`', () => {
    const s = '';
    const t = 'y';
    const expected = 'y';
    const output = findTheDifference(s, t);
    expect(output).toBe(expected);
  });

  test('Test 3: `a` | `aa`', () => {
    const s = 'a';
    const t = 'aa';
    const expected = 'a';
    const output = findTheDifference(s, t);
    expect(output).toBe(expected);
  });

  test('Test 4: `ae` | `aea`', () => {
    const s = 'ae';
    const t = 'aea';
    const expected = 'a';
    const output = findTheDifference(s, t);
    expect(output).toBe(expected);
  });

  test('Test 5: `xxxyyz` | `xxxxyyz`', () => {
    const s = 'xxxyyz';
    const t = 'xxxxyyz';
    const expected = 'x';
    const output = findTheDifference(s, t);
    expect(output).toBe(expected);
  });
});
