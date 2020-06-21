import runningSum from './solution.js';

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
    [1, 2, 3, 4],
    [1, 3, 6, 10]
  ],
  [
    [1, 1, 1, 1, 1],
    [1, 2, 3, 4, 5]
  ],
  [
    [3, 1, 2, 10, 1],
    [3, 4, 6, 16, 17]
  ],
  [
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7]
  ],
  [
    [1, -1, 1, -1, 1, -1, 1, -1, 1, -1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0]
  ],
  [
    [0, 0, 0],
    [0, 0, 0]
  ],
  [
    [10, 20, 30, 40, 50, -60, -70, -80, -90, -100],
    [10, 30, 60, 100, 150, 90, 20, -60, -150, -250]
  ],
  [
    [18, 0, -27, 66, 290, 9, 0, -55, 42],
    [18, 18, -9, 57, 347, 356, 356, 301, 343]
  ],
  [
    [11, 22, 33, 44, 55, 66, 77, 88, 99, 110],
    [11, 33, 66, 110, 165, 231, 308, 396, 495, 605]
  ],
  [
    [1, -2, 3, -4, 5, -6, 7, -8, 9, -10, 11, -12, 13, -14, 15, -16, 17, -18, 19, -20],
    [1, -1, 2, -2, 3, -3, 4, -4, 5, -5, 6, -6, 7, -7, 8, -8, 9, -9, 10, -10]
  ]
];

const buildErrorSentence = (testCase, result, itemCount) => {
  const containingDiv = document.createElement('div');
  const mainHeading = document.createElement('h3');
  const testCasePTag = document.createElement('p');
  const expectedResult = document.createElement('p');
  const output = document.createElement('p');

  mainHeading.innerText = `Failed Test Case ${itemCount + 1}`;
  testCasePTag.innerText = `Input: [${testCase[0]}]`;
  expectedResult.innerText = `Expected: [${testCase[1]}]`;
  output.innerText = `Output: [${result}]`;

  containingDiv.append(mainHeading, testCasePTag, expectedResult, output);
  containingDiv.classList.add('error-box')
  main.append(containingDiv);
}

startButton.addEventListener('click', () => {
  const delayTest = setInterval(() => {
    if (counter < testCases.length) {
      const result = runningSum(testCases[counter][0]);
      if (result.toString() === testCases[counter][1].toString()) {
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
