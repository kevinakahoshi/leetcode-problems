// @param {number[][]} A
// @return {number[][]}

const flipAndInvertImage = A => {
    const output = [];
    for (let outer = 0; outer < A.length; outer++) {
      const outerElement = A[outer];
      const innerArr = [];
      for (let inner = outerElement.length - 1; inner >= 0; inner--) {
        if (outerElement[inner]) {
          innerArr.push(0);
        } else {
          innerArr.push(1);
        }
      }
      output.push(innerArr);
    }
    return output;
};

export default flipAndInvertImage;
