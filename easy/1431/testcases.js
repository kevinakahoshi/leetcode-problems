import kidsWithCandies from './solution.js';

const body = document.querySelector('body');
const startButton = document.querySelector('button');
const main = document.querySelector('main');
const passed = document.createElement('h2');
const failed = document.createElement('h2');
passed.classList.add('smooth-transition');
failed.classList.add('smooth-transition');
main.append(passed);
main.append(failed);

let counter = 0;
const results = {
  passed: 0,
  failed: 0
}

const testCases = [
  [
    [2, 3, 5, 1, 3], 3, [true, true, true, false, true]
  ],
  [
    [4, 2, 1, 1, 2], 1, [true, false, false, false, false]
  ],
  [
    [12, 1, 12], 10, [true, false, true]
  ],
  [
    [0, 0, 0, 0, 0], 5, [true, true, true, true, true]
  ],
  [
    [1, 2, 3, 4, 5], 3, [false, true, true, true, true]
  ],
  [
    [10, 20, 30, 20, 10], 1, [false, false, true, false, false]
  ],
  [
    [5, 7, 10, 8, 1, 2, 6, 9, 5, 5, 6, 2, 3, 4, 4, 5], 4, [false, true, true, true, false, false, true, true, false, false, true, false, false, false, false, false]
  ],
  [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 0, [true, true, true, true, true, true, true, true, true, true, true, true, true, true]
  ],
  [
    [0, 1, 2], 1, [false, true, true]
  ],
  [
    [5, 10, 7, 2, 9, 10, 11, 2, 3, 5, 5, 2, 1], 1, [false, true, false, false, false, true, true, false, false, false, false, false, false]
  ]
];

const buildErrorSentence = (testCase, result, itemCount) => {
  const containingDiv = document.createElement('div');
  const mainHeading = document.createElement('h3');
  const testCasePTag = document.createElement('p');
  const expectedResult = document.createElement('p');
  const output = document.createElement('p');

  mainHeading.innerText = `Failed Test Case ${itemCount + 1}`;
  testCasePTag.innerText = `Input: [${testCase[0]}], ${testCase[1]}`;
  expectedResult.innerText = `Expected: [${testCase[2]}]`;
  output.innerText = `Output: [${result}]`;

  containingDiv.append(mainHeading, testCasePTag, expectedResult, output);
  containingDiv.classList.add('error-box')
  main.append(containingDiv);
}

startButton.addEventListener('click', () => {
  const delayTest = setInterval(() => {
    if (counter < testCases.length) {
      const result = kidsWithCandies(testCases[counter][0], testCases[counter][1]);
      if (result.toString() === testCases[counter][2].toString()) {
        if (!body.classList.contains('all-good') && !body.classList.contains('errors')) {
          body.classList.add('all-good');
        }
        results.passed++;
      } else {
        if (!body.classList.contains('errors')) {
          if (body.classList.contains('all-good')) {
            body.classList.remove('all-good');
          }
          body.classList.add('errors');
        }
        results.failed++;
        buildErrorSentence(testCases[counter], result, counter)
      }
      counter++;
    } else {
      clearInterval(delayTest);
    }
    passed.innerText = `${results.passed} ${results.passed === 1 ? 'Test' : 'Tests'} Passed`;
    failed.innerText = `${results.failed} ${results.failed === 1 ? 'Test' : 'Tests'} Failed`;
  }, 50);
});
