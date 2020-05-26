// @param {string} str
// @return {number}

const nonNum = /[+-]|\s+/g;
const letters = /[a-zA-Z]/g;

const myAtoi = str => {
    let newStr = str.trim().split('');
    let output = '';
    for (let index = 0; index < newStr.length; index++) {
        if (nonNum.test(newStr[index]) && index > 0) {
            break;
        } else if (letters.test(newStr[index])) {
            break;
        } else {
            output += newStr[index];
        }
    }
    output = parseFloat(output);
    if (isNaN(output)) return 0;
    if (output > 0x7fffffff) return 0x7fffffff;
    if (output < ~0x7fffffff) return ~0x7fffffff;
    return output;
};

export default myAtoi;
