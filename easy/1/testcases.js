import twoSum from './solution.js';

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
    [2, 7, 11, 15],
    9,
    [0, 1]
  ],
  [
    [1, 2, 3, 4],
    6,
    [1, 3]
  ],
  [
    [100, 29, -1, 10, 44, -102, 54],
    -103,
    [2, 5]
  ],
  [
    [5, 20, 38, -50, 202, 65, 9, -17, -19, 0, 90, 88, 95, 24, 909, 3636],
    999,
    [10, 14]
  ],
  [
    [-5, -10, -17, -32, -90, -850, -46, -23],
    -136,
    [4, 6]
  ],
  [
    [0, -2, 4, 87, 10, 5774, 104875, -774, 578937, 59898, 90, 77, -57],
    59902,
    [2, 9]
  ],
  [
    [1, 3],
    4,
    [0, 1]
  ],
  [
    [0, 0],
    0,
    [0, 1]
  ],
  [
    [0, 10, -58],
    10,
    [0, 1]
  ],
  [
    [10, -30, 50, 37, 22, 909, 625],
    959,
    [2, 5]
  ]
];

const buildErrorSentence = (testCase, result, itemCount) => {
  const containingDiv = document.createElement('div');
  const mainHeading = document.createElement('h3');
  const input = document.createElement('p');
  const expectedResult = document.createElement('p');
  const output = document.createElement('p');

  mainHeading.innerText = `Failed Test Case ${itemCount + 1}`;
  input.innerText = `Input: [${testCase[0]}], ${testCase[1]}`;
  expectedResult.innerText = `Expected: [${testCase[2]}]`;
  output.innerText = `Output: [${result}]`;

  containingDiv.append(mainHeading, input, expectedResult, output);
  containingDiv.classList.add('error-box')
  main.append(containingDiv);
}

startButton.addEventListener('click', () => {
  const delayTest = setInterval(() => {
    if (counter < testCases.length) {
      const result = twoSum(testCases[counter][0], testCases[counter][1]);
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
