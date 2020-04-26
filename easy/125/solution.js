// @param {string} s
// @return {boolean}

const isPalindrome = s => {
  const newString = s.split(/[^a-zA-Z0-9]/).join('').toLowerCase();
  const reverse = newString.split('').reverse().join('');
  return newString === reverse;
};

export default isPalindrome;
