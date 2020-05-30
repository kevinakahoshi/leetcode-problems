// @param {number} n
// @return {boolean}

const isHappy = n => {
  let prevN = [];
  while (!prevN.includes(n)) {
    prevN.push(n);
    const splitNum = n.toString().split('');
    splitNum.forEach((element, index) => {
      splitNum[index] = Math.pow(parseInt(element), 2);
    });
    n = splitNum.reduce((accum, current) => accum + current);
  }
  return n === 1;
};

export default isHappy;
