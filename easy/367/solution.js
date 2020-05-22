// @param {number} num
// @return {boolean}

const isPerfectSquare = num => {
    let index = 0;
    while (index * index <= num) {
      if (index * index === num) {
        return true;
      }
      index++;
    }
    return false;
};

export default isPerfectSquare;
