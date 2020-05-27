// @param {string} s
// @return {string}

const reverseWords = s => {
  return s.split(' ').filter(element => element.length > 0).reverse().join(' ');
};

export default reverseWords;
