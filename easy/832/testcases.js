import flipAndInvertImage from './solution.js';

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
    [
      [1, 1, 0],
      [1, 0, 1],
      [0, 0, 0]
    ],
    [
      [1, 0, 0],
      [0, 1, 0],
      [1, 1, 1]
    ]
  ],
  [
    [
      [1, 1, 0, 0],
      [1, 0, 0, 1],
      [0, 1, 1, 1],
      [1, 0, 1, 0]
    ],
    [
      [1, 1, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 1],
      [1, 0, 1, 0]
    ]
  ]
];

const buildErrorSentence = (testCase, result, itemCount) => {
  const containingDiv = document.createElement('div');
  const mainHeading = document.createElement('h3');
  const testCasePTag = document.createElement('p');
  const expectedResult = document.createElement('p');
  const output = document.createElement('p');
  let inputText = '';
  let expectedText = '';
  let outputText = '';

  for (let testIdx = 0; testIdx < testCase[0].length; testIdx++) {
    inputText += `[${testCase[0][testIdx]}],`;
    expectedText += `[${testCase[1][testIdx]}],`;
    outputText += `[${result[testIdx]}],`;
  }

  inputText = inputText.slice(0, inputText.length - 1);
  expectedText = expectedText.slice(0, expectedText.length - 1);
  outputText = outputText.slice(0, outputText.length - 1);

  mainHeading.innerText = `Failed Test Case ${itemCount + 1}`;
  testCasePTag.innerText = `Input: [${inputText}]`;
  expectedResult.innerText = `Expected: [${expectedText}]`;
  output.innerText = `Output: [${outputText}]`;

  containingDiv.append(mainHeading, testCasePTag, expectedResult, output);
  containingDiv.classList.add('error-box')
  main.append(containingDiv);
}

startButton.addEventListener('click', () => {
  const delayTest = setInterval(() => {
    if (counter < testCases.length) {
      const result = flipAndInvertImage(testCases[counter][0]);
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
