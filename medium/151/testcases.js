import reverseWords from './solution.js';

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
  ['the sky is blue', 'blue is sky the'],
  ['  hello world!  ', 'world! hello'],
  ['a good   example', 'example good a'],
  ['', ''],
  ['abcd', 'abcd'],
  ['testing      testing', 'testing testing'],
  ['thistestis working properly','properly working thistestis'],
  ['testcases sounding like yoda', 'yoda like sounding testcases'],
  ['s p a c e s', 's e c a p s'],
  ['It doesn\'t matter how the punctuation is in the sentence.', 'sentence. the in is punctuation the how matter doesn\'t It'],
  ['12345', '12345'],
  ['12345 but in reverse', 'reverse in but 12345'],
  ['Cooking is fun', 'fun is Cooking'],
  ['camelCasing, kebab-casing, snake_casing... it is all the same', 'same the all is it snake_casing... kebab-casing, camelCasing,'],
  ['aBc DeF gHi JkL mNo PqR sTu VwX yZ', 'yZ VwX sTu PqR mNo JkL gHi DeF aBc']
];

const buildErrorSentence = (testCase, result, itemCount) => {
  const containingDiv = document.createElement('div');
  const mainHeading = document.createElement('h3');
  const testCasePTag = document.createElement('p');
  const expectedResult = document.createElement('p');
  const output = document.createElement('p');

  mainHeading.innerText = `Failed Test Case ${itemCount + 1}`;
  testCasePTag.innerText = `Input: "${testCase[0]}"`;
  expectedResult.innerText = `Expected: "${testCase[1]}"`;
  output.innerText = `Output: "${result}"`;

  containingDiv.append(mainHeading, testCasePTag, expectedResult, output);
  containingDiv.classList.add('error-box')
  main.append(containingDiv);
}

startButton.addEventListener('click', () => {
  const delayTest = setInterval(() => {
    if (counter < testCases.length) {
      const result = reverseWords(testCases[counter][0]);
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
