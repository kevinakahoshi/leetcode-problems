import maxVolume from './solution.js';

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
  [[1, 8, 6, 2, 5, 4, 8, 3, 7], 49],
  [[0, 1, 2], 1],
  [[1,2,1], 2],
  [[0, 1], 0],
  [[10, 20, 30, 20, 10, 40, 60], 120],
  [[5, 4, 9, 12, 4, 2, 2, 5], 35],
  [[10, 10, 10], 20],
  [[1, 0, 1, 0, 0, 0, 0, 0, 0], 2],
  [[2, 4, 6, 6], 8],
  [[5, 4, 5], 10]
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
      const result = maxVolume(testCases[counter][0]);
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
