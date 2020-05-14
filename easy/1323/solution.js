// @param {number} num
// @return {number}

const maximum69Number = num => {
    let output = num;
    const storedNumArr = num.toString()
    let manipulatedNum = storedNumArr.split('');
    for (let index = 0; index < manipulatedNum.length; index++) {
      if (manipulatedNum[index] === '6') {
        manipulatedNum[index] = '9';
      } else {
        manipulatedNum[index] = '6';
      }

      const convertedNum = parseInt(manipulatedNum.join(''));

      if (convertedNum > output) {
        output = convertedNum;
        manipulatedNum = storedNumArr.split('');
      } else {
        if (manipulatedNum[index] === '6') {
          manipulatedNum[index] = '9';
        } else {
          manipulatedNum[index] = '6';
        }
      }
    }
    return output;
};

export default maximum69Number;
