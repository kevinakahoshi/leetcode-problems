import containsDuplicate from './solution.js';

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
    [1, 2, 3, 1], true
  ],
  [
    [1, 2, 3, 4], false
  ],
  [
    [1, 1, 1, 3, 3, 4, 3, 2, 4, 2], true
  ],
  [
    [], false
  ],
  [
    [5, 4, 3, 2, 1], false
  ],
  [
    [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 50], true
  ],
  [
    [1, 1], true
  ],
  [
    [-5, 0, -10, 50, 22, 375, -5778237], false
  ],
  [
    [5, 10, 20], false
  ],
  [
    [1, 1, 1, 1, 1, 1, 1], true
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
  expectedResult.innerText = `Expected: ${testCase[1]}`;
  output.innerText = `Output: ${result}`;

  containingDiv.append(mainHeading, testCasePTag, expectedResult, output);
  containingDiv.classList.add('error-box')
  main.append(containingDiv);
}

startButton.addEventListener('click', () => {
  const delayTest = setInterval(() => {
    if (counter < testCases.length) {
      const result = containsDuplicate(testCases[counter][0]);
      if (result === testCases[counter][1]) {
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
