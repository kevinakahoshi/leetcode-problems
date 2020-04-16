import relativeSortArray from './solution.js';

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
    [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19],
    [2, 1, 4, 3, 9, 6],
    [2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19]
  ],
  [
    [8, 10, 9, 27, 27, 11, 2, 5, 9, 2, 19],
    [10, 8, 2, 9, 11, 27],
    [10, 8, 2, 2, 9, 9, 11, 27, 27, 5, 19]
  ],
  [
    [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19],
    [2, 1, 4, 3, 9, 6],
    [2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19]
  ],
  [
    [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19],
    [2, 1, 4, 3, 9, 6],
    [2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19]
  ],
  [
    [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19],
    [2, 1, 4, 3, 9, 6],
    [2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19]
  ],
  [
    [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19],
    [2, 1, 4, 3, 9, 6],
    [2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19]
  ],
  [
    [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19],
    [2, 1, 4, 3, 9, 6],
    [2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19]
  ],
  [
    [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19],
    [2, 1, 4, 3, 9, 6],
    [2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19]
  ],
  [
    [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19],
    [2, 1, 4, 3, 9, 6],
    [2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19]
  ],
  [
    [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19],
    [2, 1, 4, 3, 9, 6],
    [2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19]
  ],
  [
    [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19],
    [2, 1, 4, 3, 9, 6],
    [2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19]
  ],
  [
    [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19],
    [2, 1, 4, 3, 9, 6],
    [2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19]
  ],
  [
    [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19],
    [2, 1, 4, 3, 9, 6],
    [2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19]
  ],
  [
    [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19],
    [2, 1, 4, 3, 9, 6],
    [2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19]
  ],
  [
    [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19],
    [2, 1, 4, 3, 9, 6],
    [2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19]
  ]
];

const buildErrorSentence = (testCase, result, itemCount) => {
  const containingDiv = document.createElement('div');
  const mainHeading = document.createElement('h3');
  const arr1 = document.createElement('p');
  const arr2 = document.createElement('p');
  const expectedResult = document.createElement('p');
  const output = document.createElement('p');

  mainHeading.innerText = `Failed Test Case ${itemCount + 1}`;
  arr1.innerText = `arr1: [${testCase[0]}]`;
  arr2.innerText = `arr2: [${testCase[1]}]`;
  expectedResult.innerText = `Expcted: [${testCase[2]}]`;
  output.innerText = `Output: [${result}]`;

  containingDiv.append(mainHeading, arr1, arr2, expectedResult, output);
  containingDiv.classList.add('error-box')
  main.append(containingDiv);
}

startButton.addEventListener('click', () => {
  const delayTest = setInterval(() => {
    if (counter < testCases.length) {
      const result = relativeSortArray(testCases[counter][0], testCases[counter][1]);
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
