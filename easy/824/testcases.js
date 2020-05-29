import toGoatLatin from './solution.js';

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
  ['I speak Goat Latin', 'Imaa peaksmaaa oatGmaaaa atinLmaaaaa'],
  ['The quick brown fox jumped over the lazy dog', 'heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa'],
  ['The', 'heTmaa'],
  ['only lower case', 'onlymaa owerlmaaa asecmaaaa'],
  ['ONLY UPPER CASE', 'ONLYmaa UPPERmaaa ASECmaaaa'],
  ['An elephant is enamored over exotic echidnas.', 'Anmaa elephantmaaa ismaaaa enamoredmaaaaa overmaaaaaa exoticmaaaaaaa echidnas.maaaaaaaa'],
  ['The quick brown fox jumps over the lazy dog.', 'heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpsjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa og.dmaaaaaaaaaa'],
  ['therearenospaceshere', 'herearenospacesheretmaa'],
  ['What are you testing for?', 'hatWmaa aremaaa ouymaaaa estingtmaaaaa or?fmaaaaaa'],
  ['Short and sweet', 'hortSmaa andmaaa weetsmaaaa']
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
      const result = toGoatLatin(testCases[counter][0]);
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
