const { describe, expect, test } = require("@jest/globals");
const { sortTheStudents } = require("./solution");

describe("Problem 2545: Sort the Students by Their Kth Score", () => {
  test("Test 1: [[10, 6, 9, 1], [7, 5, 11, 2], [4, 8, 3, 15]] | 2", () => {
    const score = [
      [10, 6, 9, 1],
      [7, 5, 11, 2],
      [4, 8, 3, 15],
    ];
    const k = 2;
    const expected = [
      [7, 5, 11, 2],
      [10, 6, 9, 1],
      [4, 8, 3, 15],
    ];
    const output = sortTheStudents(score, k);
    expect(output).toMatchObject(expected);
  });

  test("Test 2: [[3, 4], [5, 6]] | 0", () => {
    const score = [
      [3, 4],
      [5, 6],
    ];
    const k = 0;
    const expected = [
      [5, 6],
      [3, 4],
    ];
    const output = sortTheStudents(score, k);
    expect(output).toMatchObject(expected);
  });
});
