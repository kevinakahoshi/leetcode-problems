let result = null;
const testCases = [
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'], 'ball']
];

for (let index = 0; index < testCases.length; index++) {
  if (mostCommonWord(testCases[index][0], testCases[index][1]) === testCases[index][2]) {
    result = true;
  } else {
    result = false;
    break;
  }
}

const body = document.querySelector('body');
const passed = document.createElement('h1');
result ? passed.innerText = `${testCases.length} ${testCases.length > 1 ? 'Tests' : 'Test'} Passed` : passed.innerText = 'Failed';
body.append(passed);
