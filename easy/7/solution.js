// @param {number} x
// @return {number}

const reverse = x => {
    const stringX = x.toString();
    let output = '';

    for (let index = stringX.length - 1; index >= 0; index--) {
      output += stringX[index];
    }

    if (output[output.length - 1] === '-') {
      output = output[output.length - 1] + output.slice(0, output.length - 1);
    }

    if (Math.abs(parseInt(output)) > 0x7FFFFFFF) {
      return 0;
    }

    return parseInt(output);
};

export default reverse;
