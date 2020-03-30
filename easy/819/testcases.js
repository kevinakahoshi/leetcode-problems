import mostCommonWord from './solution.js';

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
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'hello'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'hello'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'hello'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'hello'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'hello'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'hello'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'hello'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'hello'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'hello'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'hello'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'hello'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'hello'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'hello'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'hello'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'hello'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'hello'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'hello'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'hello'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'hello'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball'],
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball']
];

const buildErrorSentence = (testCase, result, itemCount) => {
  const containingDiv = document.createElement('div');
  const mainHeading = document.createElement('h3');
  const testCasePTag = document.createElement('p');
  const expectedResult = document.createElement('p');
  const output = document.createElement('p');
  const listOfBannedWords = document.createElement('p');
  let bannedWords = '';

  mainHeading.innerText = `Failed Test Case ${itemCount}`;
  testCasePTag.innerText = `Test Case: ${testCase[0]}`;
  expectedResult.innerText = `Expcted: ${testCase[2]}`;
  output.innerText = `Output: ${result}`;

  for (let index = 0; index < testCase[1].length; index++) {
    if (testCase[1][index + 1]) {
      bannedWords += `${testCase[1][index]}, `;
    } else {
      bannedWords += testCase[1][index];
    }
  }

  listOfBannedWords.innerText = `List of Banned Words: ${bannedWords}`;
  containingDiv.append(mainHeading, testCasePTag, listOfBannedWords, expectedResult, output);
  containingDiv.classList.add('error-box')
  main.append(containingDiv);
}

startButton.addEventListener('click', () => {
  const delayTest = setInterval(() => {
    if (counter < testCases.length) {
      const result = mostCommonWord(testCases[counter][0], testCases[counter][1]);
      if (result === testCases[counter][2]) {
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
  }, 100);
});
