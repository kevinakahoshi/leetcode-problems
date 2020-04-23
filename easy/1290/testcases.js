import getDecimalValue from './solution.js';

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
    [1, 0, 1], 5
  ]
];

class Node {
  constructor() {
    this.value = null;
    this.next = null;
  }
}

const buildErrorSentence = (testCase, result, itemCount) => {
  const containingDiv = document.createElement('div');
  const mainHeading = document.createElement('h3');
  const input = document.createElement('p');
  const expectedResult = document.createElement('p');
  const output = document.createElement('p');
  mainHeading.innerText = `Failed Test Case ${itemCount + 1}`;
  input.innerText = `Input: head = [${testCase[0]}]`;
  expectedResult.innerText = `Expected: ${testCase[1]}`;
  output.innerText = `Output: ${result}`;
  containingDiv.append(mainHeading, input, expectedResult, output);
  containingDiv.classList.add('error-box')
  main.append(containingDiv);
}

const createLinkedList = headArray => {
  const head = new Node();
  let currentNode = head;
  let counter = 0;
  while (currentNode) {
    currentNode.value = headArray[counter];
    if (typeof headArray[counter + 1] === 'number') {
      currentNode.next = new Node(headArray[counter + 1]);
    }
    currentNode = currentNode.next;
    counter++;
  }
  return head;
}

startButton.addEventListener('click', () => {
  const delayTest = setInterval(() => {
    if (counter < testCases.length) {
      const head = createLinkedList(testCases[counter][0])
      const result = getDecimalValue(head);
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
