// @param {string} J
// @param {string} S
// @return {number}

const numJewelsInStones = (J, S) => {
  let output = 0;
  for (let index = 0; index < S.length; index++) {
    for (let inner = 0; inner < J.length; inner++) {
      if (J[inner] === S[index]) {
        output++;
      }
    }
  }
  return output;
};

export default numJewelsInStones;
