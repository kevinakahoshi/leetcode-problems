import fib from './solution.js';

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
  [1, 1],
  [2, 1],
  [3, 2],
  [4, 3],
  [5, 5],
  [6, 8],
  [7, 13],
  [8, 21],
  [9, 34],
  [10, 55],
  [11, 89],
  [12, 144],
  [13, 233],
  [14, 377],
  [15, 610],
  [16, 987],
  [17, 1597],
  [18, 2584],
  [19, 4181],
  [20, 6765]
];

const buildErrorSentence = (testCase, result, itemCount) => {
  const containingDiv = document.createElement('div');
  const mainHeading = document.createElement('h3');
  const testCasePTag = document.createElement('p');
  const expectedResult = document.createElement('p');
  const output = document.createElement('p');

  mainHeading.innerText = `Failed Test Case ${itemCount + 1}`;
  testCasePTag.innerText = `Input: ${testCase[0]}`;
  expectedResult.innerText = `Expected: ${testCase[1]}`;
  output.innerText = `Output: ${result}`;

  containingDiv.append(mainHeading, testCasePTag, expectedResult, output);
  containingDiv.classList.add('error-box')
  main.append(containingDiv);
}

startButton.addEventListener('click', () => {
  const delayTest = setInterval(() => {
    if (counter < testCases.length) {
      const result = fib(testCases[counter][0]);
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
