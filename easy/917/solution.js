// @param {string} S
// @return {string}

const reverseOnlyLetters = S => {
    let reverseString = '';
    const stack = [];
    const regEx = /[a-zA-Z]/;

    for (let index = 0; index < S.length; index++) {
      if (regEx.test(S[index])) {
        stack.push(S[index]);
      }
    }

    for (let second = 0; second < S.length; second++) {
      if (!regEx.test(S[second])) {
        reverseString += S[second];
      } else {
        reverseString += stack.pop();
      }
    }

    return reverseString;
};

export default reverseOnlyLetters;
