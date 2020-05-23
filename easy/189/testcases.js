import rotate from './solution.js';

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
    [1, 2, 3, 4, 5, 6, 7], 3, [5, 6, 7, 1, 2, 3, 4]
  ],
  [
    [-1, -100, 3, 99], 2, [3, 99, -1, -100]
  ],
  [
    [1, 2, 3, 4], 0, [1, 2, 3, 4],
  ],
  [
    [10, 20, 15, 25, 30, 20], 4, [15, 25, 30, 20, 10, 20]
  ],
  [
    [99, 99, 99], 1, [99, 99, 99]
  ],
  [
    [5, 4, 3, 2, 1], 5, [5, 4, 3, 2, 1]
  ],
  [
    [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200], 10, [110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
  ],
  [
    [1, 2, 3], 1, [3, 1, 2]
  ],
  [
    [5, 4, 3, 2, 1], 3, [3, 2, 1, 5, 4]
  ],
  [
    [1, 1, 1, 1, 1, 1, 1, 1, 2], 6, [1, 1, 1, 1, 1, 2, 1, 1, 1]
  ]
];

const buildErrorSentence = (testCase, result, itemCount) => {
  const containingDiv = document.createElement('div');
  const mainHeading = document.createElement('h3');
  const testCasePTag = document.createElement('p');
  const expectedResult = document.createElement('p');
  const output = document.createElement('p');

  mainHeading.innerText = `Failed Test Case ${itemCount + 1}`;
  testCasePTag.innerText = `Input: nums = [${testCase[0]}], k = ${testCase[1]}`;
  expectedResult.innerText = `Expected: [${testCase[2]}]`;
  output.innerText = `Output: [${result}]`;

  containingDiv.append(mainHeading, testCasePTag, expectedResult, output);
  containingDiv.classList.add('error-box')
  main.append(containingDiv);
}

startButton.addEventListener('click', () => {
  const delayTest = setInterval(() => {
    if (counter < testCases.length) {
      const result = rotate(testCases[counter][0], testCases[counter][1]);
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
